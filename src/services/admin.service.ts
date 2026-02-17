/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/lib/api.lib'

export async function adminGetProfile() {
  const res = await api.get('/api/admin/profile')
  return res.data as { data: any }
}

export async function adminUpdateProfile(payload: any) {
  const res = await api.put('/api/admin/profile', payload)
  return res.data
}

export async function adminListMenuCategories(page = 1) {
  const res = await api.get('/api/admin/menu-categories', { params: { page } })
  return res.data
}

export async function adminCreateMenuCategory(payload: any) {
  const res = await api.post('/api/admin/menu-categories', payload)
  return res.data
}

export async function adminUpdateMenuCategory(id: number, payload: any) {
  const res = await api.put(`/api/admin/menu-categories/${id}`, payload)
  return res.data
}

export async function adminDeleteMenuCategory(id: number) {
  const res = await api.delete(`/api/admin/menu-categories/${id}`)
  return res.data
}

export async function adminListMenuItems(page = 1) {
  const res = await api.get('/api/admin/menu-items', { params: { page } })
  return res.data
}

export async function adminCreateMenuItem(payload: any) {
  const res = await api.post('/api/admin/menu-items', payload)
  return res.data
}

export async function adminUpdateMenuItem(id: number, payload: any) {
  const res = await api.put(`/api/admin/menu-items/${id}`, payload)
  return res.data
}

export async function adminDeleteMenuItem(id: number) {
  const res = await api.delete(`/api/admin/menu-items/${id}`)
  return res.data
}

export async function adminListGalleries(page = 1) {
  const res = await api.get('/api/admin/galleries', { params: { page } })
  return res.data
}

export async function adminCreateGallery(payload: any) {
  const res = await api.post('/api/admin/galleries', payload)
  return res.data
}

export async function adminUpdateGallery(id: number, payload: any) {
  const res = await api.put(`/api/admin/galleries/${id}`, payload)
  return res.data
}

export async function adminDeleteGallery(id: number) {
  const res = await api.delete(`/api/admin/galleries/${id}`)
  return res.data
}

export async function adminListWeddingReservations(params?: { page?: number; status?: string }) {
  const res = await api.get('/api/admin/wedding-reservations', {
    params: { page: params?.page ?? 1, status: params?.status },
  })
  return res.data
}

export async function adminUpdateWeddingStatus(
  id: number,
  status: 'pending' | 'confirmed' | 'rejected' | 'cancelled',
) {
  const res = await api.patch(`/api/admin/wedding-reservations/${id}/status`, { status })
  return res.data
}
