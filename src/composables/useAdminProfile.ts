import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import { adminGetProfile } from '@/services/admin.service'
import type { User } from '@/services/auth.service'
import { truncate, capitaliseFirst } from '@/utils/string.utils'
import { maskEmail } from '@/utils/email.utils'

export function useAdminProfile() {
  const authStore = useAuthStore()

  const isFetching = ref(false)

  const displayName = computed<string>(() => {
    const name = authStore.user?.name ?? ''
    return truncate(name, 80) || 'Admin'
  })

  const displayRole = computed<string>(() => {
    const role = authStore.user?.role ?? ''
    return capitaliseFirst(truncate(role, 40)) || 'User'
  })

  const displayEmail = computed<string>(() => {
    return maskEmail(authStore.user?.email ?? '')
  })

  async function fetchProfileIfMissing(): Promise<void> {
    if (authStore.user || isFetching.value) return

    isFetching.value = true
    try {
      const res = await adminGetProfile()
      const user = res?.data

      if (isValidUser(user)) {
        authStore.setUser(user)
      }
    } catch {
    } finally {
      isFetching.value = false
    }
  }

  return {
    displayName,
    displayRole,
    displayEmail,
    isLoading: isFetching,
    fetchProfileIfMissing,
  }
}

function isValidUser(value: unknown): value is User {
  if (!value || typeof value !== 'object') return false
  const u = value as Record<string, unknown>
  return (
    typeof u.id === 'number' &&
    typeof u.name === 'string' &&
    u.name.length > 0 &&
    typeof u.email === 'string' &&
    typeof u.role === 'string'
  )
}
