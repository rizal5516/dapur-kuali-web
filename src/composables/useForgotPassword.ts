import { ref } from 'vue'
import * as authService from '@/services/auth.service'

export const useForgotPassword = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const successMessage = ref<string | null>(null)

  const forgotPassword = async (email: string) => {
    // Reset state sebelum request baru
    isLoading.value = true
    error.value = null
    success.value = false
    successMessage.value = null

    try {
      // Validasi email format di client-side (first line of defense)
      if (!email || !email.trim()) {
        throw new Error('Email wajib diisi')
      }

      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        throw new Error('Format email tidak valid')
      }

      const response = await authService.forgotPassword(email.trim())

      // Set success state
      success.value = true
      successMessage.value = response.message || 'Link reset password telah dikirim ke email Anda'

      return response
    } catch (err) {
      // Extract error message dengan safe handling
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim email reset password'

      error.value = message
      success.value = false
      successMessage.value = null

      // Re-throw untuk handling di component level jika diperlukan
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const resetState = () => {
    isLoading.value = false
    error.value = null
    success.value = false
    successMessage.value = null
  }

  return {
    // Methods
    forgotPassword,
    resetState,

    // Reactive States
    isLoading,
    error,
    success,
    successMessage,
  }
}
