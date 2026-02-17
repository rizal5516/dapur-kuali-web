/**
 * Password validation utilities.
 * Pure functions — no side effects, no Vue/store dependencies.
 * Can be reused in registration, reset-password, or any other form.
 */

export const PASSWORD_MIN_LENGTH = 8
export const PASSWORD_MAX_LENGTH = 128

export interface PasswordStrengthResult {
  valid: boolean
  errors: string[]
}

export function validatePasswordStrength(password: string): PasswordStrengthResult {
  const errors: string[] = []

  if (password.length < PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`)
  }

  if (password.length > PASSWORD_MAX_LENGTH) {
    errors.push(`Password must not exceed ${PASSWORD_MAX_LENGTH} characters.`)
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter.')
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number.')
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character.')
  }

  return { valid: errors.length === 0, errors }
}

export function getPasswordError(password: string): string {
  const { errors } = validatePasswordStrength(password)
  return errors[0] ?? ''
}

export function passwordsMatch(password: string, confirmation: string): boolean {
  return password === confirmation
}
