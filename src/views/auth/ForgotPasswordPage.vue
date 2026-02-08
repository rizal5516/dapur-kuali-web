<template>
  <AppAlert :message="errorMessage" type="error" @close="clearError" />

  <AppAlert :message="successMessage" type="success" @close="clearSuccess" />

  <AuthCard title="Forgot Password">
    <form class="mt-8 flex flex-col gap-5" @submit.prevent="handleSubmit" novalidate>
      <FormInput
        id="email"
        type="email"
        v-model="email"
        placeholder="Email"
        autocomplete="username"
        inputmode="email"
        :error="emailError"
        :disabled="isSubmitting"
        @blur="emailValidation.validate"
        required
      />

      <SubmitButton
        label="Kirim Link Reset"
        loading-text="Mengirim..."
        :loading="isSubmitting"
        :disabled="!isFormValid"
      />
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { forgotPassword } from '@/services/auth.service'
import { useAlert } from '@/composables/useAlert'
import { useEmailValidation } from '@/composables/useFormValidation'
import AppAlert from '@/components/ui/AppAlert.vue'
import AuthCard from '@/components/ui/AuthCard.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'

const { errorMessage, successMessage, showError, showSuccess, clearError, clearSuccess } =
  useAlert()

// Form state
const email = ref('')
const isSubmitting = ref(false)

// Validations
const emailValidation = useEmailValidation(email)

// Computed properties
const emailError = computed(() => emailValidation.error.value)
const isFormValid = computed(() => emailValidation.isValid.value)

// Timer untuk reset UI
let resetTimer: number | null = null

// Methods
const clearResetTimer = () => {
  if (resetTimer) {
    window.clearTimeout(resetTimer)
    resetTimer = null
  }
}

const resetUI = () => {
  email.value = ''
  clearError()
  clearSuccess()
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  clearResetTimer()
  clearError()
  clearSuccess()

  // Validate email
  const isEmailValid = emailValidation.validate()

  if (!isEmailValid) {
    showError('Mohon periksa email yang kamu isi')
    return
  }

  if (!isFormValid.value) {
    showError('Mohon periksa email yang kamu isi')
    return
  }

  isSubmitting.value = true

  try {
    const res = await forgotPassword(email.value.trim())

    const message = res?.message || 'Jika email terdaftar, kami sudah mengirim link reset password.'
    showSuccess(message)

    // Reset UI setelah 6 detik
    resetTimer = window.setTimeout(() => {
      resetUI()
    }, 6000)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Gagal mengirim permintaan reset'
    showError(message)
  } finally {
    isSubmitting.value = false
  }
}

// Cleanup on unmount
onBeforeUnmount(() => {
  clearResetTimer()
})
</script>
