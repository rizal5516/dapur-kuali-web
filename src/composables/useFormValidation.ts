import { ref, computed, type Ref } from 'vue'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const TOKEN_REGEX = /^[a-f0-9]{64}$/

export const PASSWORD_MIN_LENGTH = 10

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email.trim())
}

export const isValidToken = (token: string): boolean => {
  return TOKEN_REGEX.test(token)
}

export const isValidPasswordStrength = (password: string): boolean => {
  if (password.length < PASSWORD_MIN_LENGTH) return false

  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
}

export const useEmailValidation = (email: Ref<string>) => {
  const error = ref('')

  const validate = (): boolean => {
    error.value = ''

    if (!email.value) {
      return true // Skip validation jika kosong
    }

    if (!isValidEmail(email.value)) {
      error.value = 'Format email tidak valid'
      return false
    }

    return true
  }

  const isValid = computed(() => !error.value && !!email.value)

  return {
    error,
    validate,
    isValid,
  }
}

export const usePasswordValidation = (
  password: Ref<string>,
  options: {
    minLength?: number
    requireStrength?: boolean
  } = {},
) => {
  const { minLength = 6, requireStrength = false } = options

  const error = ref('')

  const validate = (): boolean => {
    error.value = ''

    if (!password.value) {
      return true // Skip validation jika kosong
    }

    if (password.value.length < minLength) {
      error.value = `Password minimal ${minLength} karakter`
      return false
    }

    if (requireStrength && !isValidPasswordStrength(password.value)) {
      error.value = 'Password harus mengandung huruf besar, kecil, angka, dan karakter khusus'
      return false
    }

    return true
  }

  const isValid = computed(() => !error.value && password.value.length >= minLength)

  return {
    error,
    validate,
    isValid,
  }
}

export const usePasswordConfirmationValidation = (
  password: Ref<string>,
  confirmation: Ref<string>,
) => {
  const error = ref('')

  const validate = (): boolean => {
    error.value = ''

    if (!confirmation.value) {
      return true // Skip validation jika kosong
    }

    if (confirmation.value !== password.value) {
      error.value = 'Password tidak sama'
      return false
    }

    return true
  }

  const isValid = computed(() => !error.value && !!confirmation.value && confirmation.value === password.value)

  return {
    error,
    validate,
    isValid,
  }
}

export const sanitizeMessage = (message: string): string => {
  // Basic HTML entity encoding
  return message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}
