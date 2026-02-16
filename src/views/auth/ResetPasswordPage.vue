<template>
  <AppAlert :message="errorMessage" type="error" @close="clearError" />

  <AppAlert :message="successMessage" type="success" @close="clearSuccess" />

  <AuthCard title="Reset Password">
    <form class="mt-8 flex flex-col gap-5" @submit.prevent="handleSubmit" novalidate>
      <FormInput
        id="email"
        type="email"
        v-model="email"
        placeholder="Email"
        autocomplete="username"
        inputmode="email"
        disabled
        readonly
      />

      <FormInput
        id="password"
        type="password"
        v-model="password"
        placeholder="Password Baru"
        autocomplete="new-password"
        :error="passwordError"
        :disabled="isLoading"
        @blur="passwordValidation.validate"
        required
      />

      <FormInput
        id="password-confirmation"
        type="password"
        v-model="passwordConfirmation"
        placeholder="Konfirmasi Password Baru"
        autocomplete="new-password"
        :error="confirmationError"
        :disabled="isLoading"
        @blur="confirmationValidation.validate"
        required
      />

      <SubmitButton
        label="Reset Password"
        loading-text="Memproses..."
        :loading="isLoading"
        :disabled="!isFormValid"
      />
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useResetPassword } from '@/composables/useResetPassword'
import { useAlert } from '@/composables/useAlert'
import {
  usePasswordValidation,
  usePasswordConfirmationValidation,
  isValidToken,
  isValidEmail,
  PASSWORD_MIN_LENGTH,
} from '@/composables/useFormValidation'
import AppAlert from '@/components/ui/AppAlert.vue'
import AuthCard from '@/components/ui/AuthCard.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'

const route = useRoute()
const router = useRouter()
const { resetPassword, isLoading } = useResetPassword()
const { errorMessage, successMessage, showError, showSuccess, clearError, clearSuccess } =
  useAlert()

const email = ref('')
const token = ref('')
const password = ref('')
const passwordConfirmation = ref('')

const passwordValidation = usePasswordValidation(password, {
  minLength: PASSWORD_MIN_LENGTH,
  requireStrength: true,
})

const confirmationValidation = usePasswordConfirmationValidation(password, passwordConfirmation)

const passwordError = computed(() => passwordValidation.error.value)
const confirmationError = computed(() => confirmationValidation.error.value)

const isFormValid = computed(() => {
  return (
    passwordValidation.isValid.value &&
    confirmationValidation.isValid.value &&
    password.value === passwordConfirmation.value
  )
})

const handleSubmit = async () => {
  clearError()
  clearSuccess()

  const isPasswordValid = passwordValidation.validate()
  const isConfirmationValid = confirmationValidation.validate()

  if (!isPasswordValid || !isConfirmationValid) {
    showError('Pastikan password memenuhi semua kriteria')
    return
  }

  if (!isFormValid.value) {
    showError('Pastikan semua field terisi dengan benar')
    return
  }

  try {
    const response = await resetPassword(
      email.value,
      password.value,
      passwordConfirmation.value,
      token.value,
    )

    showSuccess(response.message)

    password.value = ''
    passwordConfirmation.value = ''

    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan'
    showError(message)

    password.value = ''
    passwordConfirmation.value = ''
  }
}

onMounted(() => {
  const tokenParam = route.query.token
  const emailParam = route.query.email

  if (!tokenParam || typeof tokenParam !== 'string' || !isValidToken(tokenParam)) {
    showError('Link reset password tidak valid')
    setTimeout(() => {
      router.push('/forgot-password')
    }, 2000)
    return
  }

  if (!emailParam || typeof emailParam !== 'string' || !isValidEmail(emailParam)) {
    showError('Link reset password tidak valid')
    setTimeout(() => {
      router.push('/forgot-password')
    }, 2000)
    return
  }

  token.value = tokenParam
  email.value = emailParam.toLowerCase().trim()
})
</script>
