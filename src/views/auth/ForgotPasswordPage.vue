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
import AuthCard from '@/components/ui/auth/AuthCard.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'

const { forgotPassword, isLoading, error, success, successMessage, resetState } =
  useForgotPassword()

const email = ref('')

const emailValidation = useEmailValidation(email)

const emailError = computed(() => emailValidation.error.value)
const isFormValid = computed(() => emailValidation.isValid.value)

let resetTimer: number | null = null

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
  if (isLoading.value) return

  clearResetTimer()
  resetState()

  const isEmailValid = emailValidation.validate()

  if (!isEmailValid || !isFormValid.value) {
    error.value = 'Mohon periksa email yang kamu isi'
    return
  }

  try {
    await forgotPassword(email.value)

    if (success.value) {
      resetTimer = window.setTimeout(() => {
        resetUI()
      }, 6000)
    }
  } catch (err) {
    console.error('Forgot password failed:', err)
  }
}

onBeforeUnmount(() => {
  clearResetTimer()
})
</script>
