import { api } from '@/lib/api.lib'

export async function uploadImage(
  file: File,
  folder: 'general' | 'menu' | 'gallery' | 'promo' | 'profile' = 'general',
) {
  const form = new FormData()
  form.append('image', file)
  form.append('folder', folder)

  const res = await api.post('/api/admin/uploads/images', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  })

  // return { path, url }
  return res.data as { message: string; data: { path: string; url: string } }
}
