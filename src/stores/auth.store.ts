import { defineStore } from 'pinia'
import type { User } from '@/services/auth.service'
import * as authService from '@/services/auth.service'

type AuthState = {
  user: User | null
  bootstrapped: boolean
  loading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    bootstrapped: false,
    loading: false,
  }),

  getters: {
    isAuthenticated: (s) => !!s.user,
    role: (s) => s.user?.role ?? null,
  },

  actions: {
    async bootstrap() {
      if (this.bootstrapped) return this.user

      this.loading = true
      try {
        const res = await authService.me()
        this.user = res.user
      } catch {
        this.user = null
      } finally {
        this.bootstrapped = true
        this.loading = false
      }

      return this.user
    },

    async login(email: string, password: string) {
      this.loading = true
      try {
        const res = await authService.login(email, password)
        this.user = res.user
        this.bootstrapped = true
        return res.user
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      try {
        await authService.logout()
      } finally {
        this.user = null
        this.bootstrapped = true
        this.loading = false
      }
    },

    setUser(user: User) {
      this.user = user
      this.bootstrapped = true
    },

    reset() {
      this.user = null
      this.bootstrapped = false
      this.loading = false
    },
  },
})
