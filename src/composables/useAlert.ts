import { ref } from 'vue'
import { sanitizeMessage } from './useFormValidation'

export type AlertType = 'success' | 'error' | 'info' | 'warning'

export interface AlertState {
  message: string
  type: AlertType
}

export const useAlert = () => {
  const errorMessage = ref('')
  const successMessage = ref('')
  const infoMessage = ref('')
  const warningMessage = ref('')

  const showError = (message: string, duration?: number) => {
    errorMessage.value = sanitizeMessage(message)

    if (duration) {
      setTimeout(() => {
        errorMessage.value = ''
      }, duration)
    }
  }

  const showSuccess = (message: string, duration?: number) => {
    successMessage.value = sanitizeMessage(message)

    if (duration) {
      setTimeout(() => {
        successMessage.value = ''
      }, duration)
    }
  }

  const showInfo = (message: string, duration?: number) => {
    infoMessage.value = sanitizeMessage(message)

    if (duration) {
      setTimeout(() => {
        infoMessage.value = ''
      }, duration)
    }
  }

  const showWarning = (message: string, duration?: number) => {
    warningMessage.value = sanitizeMessage(message)

    if (duration) {
      setTimeout(() => {
        warningMessage.value = ''
      }, duration)
    }
  }

  const clearAll = () => {
    errorMessage.value = ''
    successMessage.value = ''
    infoMessage.value = ''
    warningMessage.value = ''
  }

  const clearError = () => {
    errorMessage.value = ''
  }

  const clearSuccess = () => {
    successMessage.value = ''
  }

  const clearInfo = () => {
    infoMessage.value = ''
  }

  const clearWarning = () => {
    warningMessage.value = ''
  }

  return {
    errorMessage,
    successMessage,
    infoMessage,
    warningMessage,

    showError,
    showSuccess,
    showInfo,
    showWarning,
    clearAll,
    clearError,
    clearSuccess,
    clearInfo,
    clearWarning,
  }
}
