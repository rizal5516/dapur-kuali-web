<template>
  <AppAlert :message="error" type="error" @close="clearError" />

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
        :disabled="isLoading"
        @blur="emailValidation.validate"
        required
      />

      <SubmitButton
        label="Kirim Link Reset"
        loading-text="Mengirim..."
        :loading="isLoading"
        :disabled="!isFormValid"
      />
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { useForgotPassword } from '@/composables/useForgotPassword'
import { useEmailValidation } from '@/composables/useFormValidation'
import AppAlert from '@/components/ui/AppAlert.vue'
import AuthCard from '@/components/ui/AuthCard.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'

// Composables
const { forgotPassword, isLoading, error, success, successMessage, resetState } =
  useForgotPassword()

// Form state
const email = ref('')

// Validations
const emailValidation = useEmailValidation(email)

// Computed properties
const emailError = computed(() => emailValidation.error.value)
const isFormValid = computed(() => emailValidation.isValid.value)

// Timer untuk auto-reset UI setelah sukses
let resetTimer: number | null = null

// Methods
const clearResetTimer = () => {
  if (resetTimer) {
    window.clearTimeout(resetTimer)
    resetTimer = null
  }
}

const clearError = () => {
  error.value = null
}

const clearSuccess = () => {
  successMessage.value = null
}

const resetUI = () => {
  email.value = ''
  resetState()
}

const handleSubmit = async () => {
  // Prevent double submission
  if (isLoading.value) return

  // Clear previous timers dan messages
  clearResetTimer()
  resetState()

  // Validate email before submit
  const isEmailValid = emailValidation.validate()

  if (!isEmailValid || !isFormValid.value) {
    error.value = 'Mohon periksa email yang kamu isi'
    return
  }

  try {
    await forgotPassword(email.value)

    // Success! Auto-reset UI after 6 seconds
    if (success.value) {
      resetTimer = window.setTimeout(() => {
        resetUI()
      }, 6000)
    }
  } catch (err) {
    // Error sudah di-handle di composable
    // Component hanya perlu display error yang sudah ada di error.value
    console.error('Forgot password failed:', err)
  }
}

// Cleanup on unmount
onBeforeUnmount(() => {
  clearResetTimer()
})
</script>
