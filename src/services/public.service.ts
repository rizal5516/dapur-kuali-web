/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/lib/api.lib'

export async function getPublicProfile() {
  const res = await api.get('/api/public/profile')
  return res.data as { data: any }
}

export async function getPublicMenu(params?: { cuisine?: string; featured?: boolean }) {
  const res = await api.get('/api/public/menu', {
    params: {
      cuisine: params?.cuisine,
      featured: params?.featured ? 1 : undefined,
    },
  })
  return res.data as { data: any[] }
}

export async function getPublicGallery(params?: { category?: 'food' | 'interior' | 'wedding' }) {
  const res = await api.get('/api/public/gallery', { params })
  return res.data as { data: any[] }
}

export async function createWeddingReservation(payload: {
  event_date: string // YYYY-MM-DD
  time_slot?: 'siang' | 'malam' | 'custom'
  guest_estimate?: number
  contact_name: string
  phone: string
  email?: string
  notes?: string
}) {
  const res = await api.post('/api/public/wedding-reservations', payload)
  return res.data
}
