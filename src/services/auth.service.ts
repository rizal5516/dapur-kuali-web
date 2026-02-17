import axios from 'axios'
import { api, ensureCsrfCookie } from '@/lib/api'

export type User = {
  id: number
  name: string
  email: string
  role: 'admin' | 'editor'
}

export async function login(email: string, password: string) {
  try {
    await ensureCsrfCookie()
    const res = await api.post('/api/admin/login', { email, password })
    return res.data as { message: string; user: User }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = err.response?.data

      if (
        data &&
        typeof data === 'object' &&
        typeof data.message === 'string' &&
        data.message.trim()
      ) {
        throw new Error(data.message)
      }

      if (data && typeof data === 'object' && data.errors && typeof data.errors === 'object') {
        const firstKey = Object.keys(data.errors)[0]
        const firstMsg = firstKey ? data.errors[firstKey]?.[0] : null
        if (typeof firstMsg === 'string' && firstMsg.trim()) throw new Error(firstMsg)
      }

      if (typeof data === 'string' && data.trim()) {
        throw new Error(data)
      }
    }

    throw new Error('Request gagal. Coba lagi.')
  }
}

export async function forgotPassword(email: string) {
  try {
    await ensureCsrfCookie()
    const res = await api.post('/api/admin/forgot-password', { email })
    return res.data as { message: string }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = err.response?.data

      if (
        data &&
        typeof data === 'object' &&
        typeof data.message === 'string' &&
        data.message.trim()
      ) {
        throw new Error(data.message)
      }

      if (data && typeof data === 'object' && data.errors && typeof data.errors === 'object') {
        const firstKey = Object.keys(data.errors)[0]
        const firstMsg = firstKey ? data.errors[firstKey]?.[0] : null
        if (typeof firstMsg === 'string' && firstMsg.trim()) throw new Error(firstMsg)
      }

      if (typeof data === 'string' && data.trim()) {
        throw new Error(data)
      }
    }

    throw new Error('Request gagal. Coba lagi.')
  }
}

export async function resetPassword(
  email: string,
  password: string,
  passwordConfirmation: string,
  token: string,
) {
  try {
    await ensureCsrfCookie()
    const res = await api.post('/api/admin/reset-password', {
      email,
      password,
      password_confirmation: passwordConfirmation,
      token,
    })
    return res.data as { message: string; status: string }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = err.response?.data

      if (
        data &&
        typeof data === 'object' &&
        typeof data.message === 'string' &&
        data.message.trim()
      ) {
        throw new Error(data.message)
      }

      if (data && typeof data === 'object' && data.errors && typeof data.errors === 'object') {
        const firstKey = Object.keys(data.errors)[0]
        const firstMsg = firstKey ? data.errors[firstKey]?.[0] : null
        if (typeof firstMsg === 'string' && firstMsg.trim()) throw new Error(firstMsg)
      }

      if (typeof data === 'string' && data.trim()) {
        throw new Error(data)
      }
    }

    throw new Error('Request gagal. Coba lagi.')
  }
}

export async function me() {
  try {
    const res = await api.get('/api/admin/me')
    return res.data as { user: User | null }
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 401) {
      return { user: null }
    }
    throw err
  }
}

export async function logout() {
  const res = await api.post('/api/admin/logout')
  return res.data as { message: string }
}
