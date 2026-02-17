import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'

export const useLogin = () => {
  const authStore = useAuthStore()

  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const login = async (email: string, password: string) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      if (!email || !email.trim()) {
        throw new Error('Email wajib diisi')
      }

      if (!password || !password.trim()) {
        throw new Error('Password wajib diisi')
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        throw new Error('Format email tidak valid')
      }

      if (password.length < 6) {
        throw new Error('Password minimal 6 karakter')
      }

      await authStore.login(email.trim(), password)
      success.value = true
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Email atau password salah'

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
    login,
    resetState,

    isLoading,
    error,
    success,
  }
}
