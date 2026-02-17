export function truncate(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength)
}

export function capitaliseFirst(value: string): string {
  if (!value) return ''
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}
