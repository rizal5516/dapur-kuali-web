import { api } from '@/lib/api.lib'
import type { ChangePasswordPayload, ChangePasswordResponse } from '@/types/changePassword.types'

export async function changePassword(
  payload: ChangePasswordPayload,
): Promise<ChangePasswordResponse> {
  const res = await api.post<ChangePasswordResponse>('/api/admin/change-password', payload)
  return res.data
}
