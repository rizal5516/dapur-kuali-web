import { ref } from 'vue'
import * as authService from '@/services/auth.service'

export const useResetPassword = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const resetPassword = async (
    email: string,
    password: string,
    passwordConfirmation: string,
    token: string
  ) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      const response = await authService.resetPassword(
        email,
        password,
        passwordConfirmation,
        token
      )

      success.value = true
      return response
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan'
      error.value = message
      success.value = false
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const resetState = () => {
    isLoading.value = false
    error.value = null
    success.value = false
  }

  return {
    resetPassword,
    resetState,
    isLoading,
    error,
    success,
  }
}
