import { api } from '@/lib/api'

export const checkHealth = async () => {
  const res = await api.get('/api/health')
  return res.data
}
