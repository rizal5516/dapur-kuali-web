<template>
  <AppAlert :message="error" type="error" @close="clearError" />

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
        :disabled="isLoading"
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
        :disabled="isLoading"
        @blur="passwordValidation.validate"
        required
      />

      <div class="flex text-xs sm:text-sm">
        <div class="flex gap-2.5 mr-auto flex-row items-center"></div>

        <RouterLink
          class="opacity-70 hover:opacity-100 transition-opacity"
          :to="{ name: 'forgot-password' }"
          :tabindex="isLoading ? -1 : 0"
        >
          Forgot Password?
        </RouterLink>
      </div>

      <SubmitButton
        label="Login"
        loading-text="Signing in..."
        :loading="isLoading"
        :disabled="!isFormValid"
      />
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useLogin } from '@/composables/useLogin'
import { safeRedirectTarget } from '@/utils/safeRedirect'
import { useEmailValidation, usePasswordValidation } from '@/composables/useFormValidation'
import AppAlert from '@/components/ui/AppAlert.vue'
import AuthCard from '@/components/ui/auth/AuthCard.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

const { login, isLoading, error, success, resetState } = useLogin()

const email = ref('')
const password = ref('')
const successMessage = ref<string | null>(null)

const emailValidation = useEmailValidation(email)
const passwordValidation = usePasswordValidation(password, { minLength: 6 })

const emailError = computed(() => emailValidation.error.value)
const passwordError = computed(() => passwordValidation.error.value)

const isFormValid = computed(() => {
  return emailValidation.isValid.value && passwordValidation.isValid.value
})

const clearError = () => {
  error.value = null
}

const clearSuccess = () => {
  successMessage.value = null
}

const handleSubmit = async () => {
  if (isLoading.value) return

  resetState()
  clearSuccess()

  const isEmailValid = emailValidation.validate()
  const isPasswordValid = passwordValidation.validate()

  if (!isEmailValid || !isPasswordValid || !isFormValid.value) {
    error.value = 'Mohon periksa input yang kamu isi'
    return
  }

  try {
    await login(email.value, password.value)

    if (success.value) {
      const target = safeRedirectTarget(route.query.redirect, auth.role, '/dashboard')
      await router.replace(target)
    }
  } catch (err) {
    console.error('Login failed:', err)
  }
}
</script>
