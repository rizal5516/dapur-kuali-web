import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'

export const useLogin = () => {
  const authStore = useAuthStore()

  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const login = async (email: string, password: string) => {
    // Reset state sebelum request baru
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      // Validasi input di client-side (first line of defense)
      if (!email || !email.trim()) {
        throw new Error('Email wajib diisi')
      }

      if (!password || !password.trim()) {
        throw new Error('Password wajib diisi')
      }

      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        throw new Error('Format email tidak valid')
      }

      // Password minimum length validation
      if (password.length < 6) {
        throw new Error('Password minimal 6 karakter')
      }

      await authStore.login(email.trim(), password)

      // Set success state
      success.value = true

    } catch (err) {
      // Extract error message dengan safe handling
      const message = err instanceof Error
        ? err.message
        : 'Email atau password salah'

      error.value = message
      success.value = false

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
  }

  return {
    // Methods
    login,
    resetState,

    // Reactive States
    isLoading,
    error,
    success,
  }
}
