import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export function useLogout() {
  const router = useRouter()
  const authStore = useAuthStore()

  const isLoggingOut = ref(false)
  const error = ref<string | null>(null)
  const handleLogout = async (): Promise<void> => {
    error.value = null

    if (isLoggingOut.value) return

    isLoggingOut.value = true

    try {
      await authStore.logout()
      await router.push({ name: 'login' })
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Gagal melakukan logout. Silakan coba lagi.'
    } finally {
      isLoggingOut.value = false
    }
  }

  return {
    isLoggingOut,
    error,
    handleLogout,
  }
}
