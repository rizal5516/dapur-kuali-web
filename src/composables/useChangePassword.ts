import { reactive, ref, computed } from 'vue'
import { useChangePasswordStore } from '@/stores/changePassword.store'
import { getPasswordError, passwordsMatch } from '@/utils/password.utils'
import type { ChangePasswordForm, ChangePasswordFormErrors } from '@/types/changePassword.types'

export function useChangePassword() {
  const store = useChangePasswordStore()

  const form = reactive<ChangePasswordForm>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const clientErrors = reactive<ChangePasswordFormErrors>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const alertMessage = ref<string | null>(null)
  const alertType = ref<'success' | 'error'>('success')

  function showAlert(message: string, type: 'success' | 'error'): void {
    alertMessage.value = message
    alertType.value = type
  }

  function clearAlert(): void {
    alertMessage.value = null
  }

  const isLoading = computed(() => store.isLoading)

  const errors = computed(() => ({
    currentPassword: clientErrors.currentPassword || store.serverErrors.currentPassword || '',
    newPassword: clientErrors.newPassword || store.serverErrors.newPassword || '',
    confirmPassword: clientErrors.confirmPassword || store.serverErrors.confirmPassword || '',
  }))

  function validate(): boolean {
    clearClientErrors()

    let valid = true

    if (!form.currentPassword) {
      clientErrors.currentPassword = 'Current password is required.'
      valid = false
    }

    const newPasswordError = getPasswordError(form.newPassword)
    if (newPasswordError) {
      clientErrors.newPassword = newPasswordError
      valid = false
    }

    if (form.newPassword && form.newPassword === form.currentPassword) {
      clientErrors.newPassword = 'New password must be different from the current password.'
      valid = false
    }

    if (!passwordsMatch(form.newPassword, form.confirmPassword)) {
      clientErrors.confirmPassword = 'Passwords do not match.'
      valid = false
    }

    return valid
  }

  async function handleSubmit(): Promise<void> {
    clearAlert()

    const isValid = validate()
    if (!isValid) return

    const success = await store.submit({
      current_password: form.currentPassword,
      new_password: form.newPassword,
      new_password_confirmation: form.confirmPassword,
    })

    if (success) {
      const message = store.successMessage
      resetForm()
      showAlert(message, 'success')
    } else if (store.errorMessage) {
      showAlert(store.errorMessage, 'error')
    }
  }

  function clearClientErrors(): void {
    clientErrors.currentPassword = ''
    clientErrors.newPassword = ''
    clientErrors.confirmPassword = ''
    store.reset()
  }

  function resetForm(): void {
    form.currentPassword = ''
    form.newPassword = ''
    form.confirmPassword = ''
    clearClientErrors()
  }

  return {
    form,
    errors,
    isLoading,
    alertMessage,
    alertType,
    clearAlert,
    handleSubmit,
    resetForm,
  }
}
