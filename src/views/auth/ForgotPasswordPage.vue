<template>
  <div
    class="box relative p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md mx-auto my-auto w-full px-5 py-8 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-24 xl:w-auto xl:p-0 xl:before:hidden xl:after:hidden"
  >
    <h2 class="text-center text-2xl font-semibold xl:text-left xl:text-3xl">Forgot Password</h2>

    <div class="mt-2 text-center opacity-70 xl:hidden">
      Masukkan email akun kamu. Jika terdaftar, kami akan mengirim link untuk reset password.
    </div>

    <div v-if="successMessage" class="mt-4 rounded-md border p-3 text-sm">
      {{ successMessage }}
    </div>

    <div v-if="errorMessage" class="mt-4 rounded-md border p-3 text-sm">
      {{ errorMessage }}
    </div>

    <form class="mt-8 flex flex-col gap-5" @submit.prevent="onSubmit" novalidate>
      <input
        class="h-10 w-full rounded-md border bg-background ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 box block min-w-full px-5 py-6 xl:min-w-[28rem]"
        type="email"
        v-model.trim="email"
        autocomplete="username"
        inputmode="email"
        placeholder="Email"
        :aria-invalid="!!emailError"
        :disabled="submitting"
        required
      />

      <button
        class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-primary)] h-10 login-button box w-full px-4 py-5"
        type="submit"
        :disabled="submitting || !formValid"
      >
        <span v-if="!submitting">Kirim Link Reset</span>

        <span v-else class="flex items-center gap-2">
          <div class="loader-dots ![--color:--alpha(var(--color-primary)/80%)]"></div>
          Mengirim...
        </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { forgotPassword } from '@/services/auth.service'

const email = ref('')

const submitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

let resetTimer: number | null = null

const emailError = computed(() => {
  if (!email.value) return ''
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
  return ok ? '' : 'Format email tidak valid.'
})

const formValid = computed(() => !!email.value && !emailError.value)

function clearResetTimer() {
  if (resetTimer) {
    window.clearTimeout(resetTimer)
    resetTimer = null
  }
}

function resetUI() {
  email.value = ''
  errorMessage.value = ''
  successMessage.value = ''
}

async function onSubmit() {
  if (submitting.value) return

  clearResetTimer()
  errorMessage.value = ''
  successMessage.value = ''

  if (!formValid.value) {
    errorMessage.value = 'Mohon periksa email yang kamu isi.'
    return
  }

  submitting.value = true
  try {
    const res = await forgotPassword(email.value.trim())

    successMessage.value =
      res?.message || 'Jika email terdaftar, kami sudah mengirim link reset password.'

    resetTimer = window.setTimeout(() => {
      resetUI()
    }, 6000)
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'Gagal mengirim permintaan reset.'
  } finally {
    submitting.value = false
  }
}

onBeforeUnmount(() => {
  clearResetTimer()
})
</script>
