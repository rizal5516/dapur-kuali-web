<template>
  <div
    v-if="errorMessage || successMessage"
    class="fixed top-6 right-5 z-[120] flex flex-col gap-3 min-w-[320px] max-w-sm"
  >
    <div
      v-if="errorMessage"
      class="alert flex items-center gap-2 rounded-xl p-4 shadow-lg bg-(--color)/20 border border-(--color)/60 text-(--color) [--color:var(--color-danger)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 stroke-[1.5]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>

      <span class="flex-1">{{ errorMessage }}</span>

      <button
        class="ml-auto cursor-pointer"
        type="button"
        aria-label="Close"
        @click="errorMessage = ''"
      >
        ✕
      </button>
    </div>

    <div
      v-if="successMessage"
      class="alert flex items-center gap-2 rounded-xl p-4 shadow-lg bg-(--color)/20 border border-(--color)/60 text-(--color) [--color:var(--color-success)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 stroke-[1.5]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>

      <span class="flex-1">{{ successMessage }}</span>

      <button
        class="ml-auto cursor-pointer"
        type="button"
        aria-label="Close"
        @click="successMessage = ''"
      >
        ✕
      </button>
    </div>
  </div>

  <div
    class="box relative p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md mx-auto my-auto w-full px-5 py-8 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-24 xl:w-auto xl:p-0 xl:before:hidden xl:after:hidden"
  >
    <h2 class="text-center text-2xl font-semibold xl:text-left xl:text-3xl">Sign In</h2>

    <div class="mt-2 text-center opacity-70 xl:hidden">
      A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place
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
        required
      />

      <input
        class="h-10 w-full rounded-md border bg-background ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 box block min-w-full px-5 py-6 xl:min-w-[28rem]"
        type="password"
        v-model="password"
        autocomplete="current-password"
        placeholder="Password"
        :aria-invalid="!!passwordError"
        required
      />

      <div class="flex text-xs sm:text-sm">
        <div class="flex gap-2.5 mr-auto flex-row items-center"></div>

        <RouterLink class="opacity-70" to="/forgot-password"> Forgot Password? </RouterLink>
      </div>

      <button
        class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-primary)] h-10 login-button box w-full px-4 py-5"
        type="submit"
        :disabled="submitting || !formValid"
      >
        <span v-if="!submitting">Login</span>
        <span v-else class="flex items-center gap-2">
          <div class="loader-dots ![--color:--alpha(var(--color-primary)/80%)]"></div>
          Signing in...
        </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { safeRedirectTarget } from '@/utils/safeRedirect'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

const email = ref('')
const password = ref('')

const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const emailError = computed(() => {
  if (!email.value) return ''
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
  return ok ? '' : 'Format email tidak valid.'
})

const passwordError = computed(() => {
  if (!password.value) return ''
  return password.value.length >= 6 ? '' : 'Password minimal 6 karakter.'
})

const formValid = computed(() => {
  return !!email.value && !!password.value && !emailError.value && !passwordError.value
})

function showError(msg: string) {
  errorMessage.value = msg
  setTimeout(() => (errorMessage.value = ''), 2000)
}

async function onSubmit() {
  if (submitting.value) return
  errorMessage.value = ''
  successMessage.value = ''

  if (!formValid.value) {
    errorMessage.value = 'Mohon periksa input yang kamu isi.'
    return
  }

  submitting.value = true
  try {
    await auth.login(email.value.trim(), password.value)

    const target = safeRedirectTarget(route.query.redirect, auth.role, '/dashboard')

    await router.replace(target)
  } catch (err) {
    showError(err instanceof Error ? err.message : 'Email atau password salah.')
  } finally {
    submitting.value = false
  }
}
</script>
