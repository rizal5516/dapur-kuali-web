export function maskEmail(email: string): string {
  const trimmed = email.trim()
  const atIndex = trimmed.indexOf('@')

  if (atIndex <= 0) return ''

  const local = trimmed.slice(0, atIndex)
  const domain = trimmed.slice(atIndex)

  const visibleChars = Math.min(3, local.length)
  return `${local.slice(0, visibleChars)}***${domain}`
}
