export type UserRole = 'admin' | 'editor'

const ROLE_REDIRECT_WHITELIST: Record<UserRole, string[]> = {
  admin: ['/dashboard', '/admin'],
  editor: ['/dashboard', '/editor'],
}

export function safeRedirectTarget(
  val: unknown,
  role: UserRole | null | undefined,
  fallback = '/dashboard',
): string {
  if (typeof val !== 'string') return fallback
  if (!val.startsWith('/')) return fallback
  if (val.startsWith('//')) return fallback
  if (val.includes('\\')) return fallback

  if (!role) return fallback

  const whitelist = ROLE_REDIRECT_WHITELIST[role] ?? []

  const allowed = whitelist.some((base) => val === base || val.startsWith(`${base}/`))

  return allowed ? val : fallback
}
