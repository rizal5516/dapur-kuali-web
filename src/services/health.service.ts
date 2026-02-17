import { api } from '@/lib/api.lib'

export const checkHealth = async () => {
  const res = await api.get('/api/health')
  return res.data
}
