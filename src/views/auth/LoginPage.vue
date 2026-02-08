<template>
  <AppAlert :message="errorMessage" type="error" @close="clearError" />

  <AppAlert :message="successMessage" type="success" @close="clearSuccess" />

  <AuthCard title="Sign In">
    <form class="mt-8 flex flex-col gap-5" @submit.prevent="handleSubmit" novalidate>
      <FormInput
        id="email"
        type="email"
        v-model="email"
        placeholder="Email"
        autocomplete="username"
        inputmode="email"
        :error="emailError"
        @blur="emailValidation.validate"
        required
      />

      <FormInput
        id="password"
        type="password"
        v-model="password"
        placeholder="Password"
        autocomplete="current-password"
        :error="passwordError"
        @blur="passwordValidation.validate"
        required
      />

      <div class="flex text-xs sm:text-sm">
        <div class="flex gap-2.5 mr-auto flex-row items-center"></div>

        <RouterLink class="opacity-70 hover:opacity-100 transition-opacity" to="/forgot-password">
          Forgot Password?
        </RouterLink>
      </div>

      <SubmitButton
        label="Login"
        loading-text="Signing in..."
        :loading="isSubmitting"
        :disabled="!isFormValid"
      />
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { safeRedirectTarget } from '@/utils/safeRedirect'
import { useAlert } from '@/composables/useAlert'
import { useEmailValidation, usePasswordValidation } from '@/composables/useFormValidation'
import AppAlert from '@/components/ui/AppAlert.vue'
import AuthCard from '@/components/ui/AuthCard.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const { errorMessage, successMessage, showError, clearError, clearSuccess } = useAlert()

// Form state
const email = ref('')
const password = ref('')
const isSubmitting = ref(false)

// Validations
const emailValidation = useEmailValidation(email)
const passwordValidation = usePasswordValidation(password, { minLength: 6 })

// Computed properties
const emailError = computed(() => emailValidation.error.value)
const passwordError = computed(() => passwordValidation.error.value)

const isFormValid = computed(() => {
  return emailValidation.isValid.value && passwordValidation.isValid.value
})

// Methods
const handleSubmit = async () => {
  if (isSubmitting.value) return

  clearError()
  clearSuccess()

  // Validate fields
  const isEmailValid = emailValidation.validate()
  const isPasswordValid = passwordValidation.validate()

  if (!isEmailValid || !isPasswordValid) {
    showError('Mohon periksa input yang kamu isi')
    return
  }

  if (!isFormValid.value) {
    showError('Mohon periksa input yang kamu isi')
    return
  }

  isSubmitting.value = true

  try {
    await auth.login(email.value.trim(), password.value)

    const target = safeRedirectTarget(route.query.redirect, auth.role, '/dashboard')

    await router.replace(target)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Email atau password salah'
    showError(message)
  } finally {
    isSubmitting.value = false
  }
}
</script>
