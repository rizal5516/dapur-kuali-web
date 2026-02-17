import { reactive, ref } from 'vue'

interface ChangePasswordForm {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

interface ChangePasswordErrors {
  oldPassword?: string
  newPassword?: string
  confirmPassword?: string
}

const MIN_PASSWORD_LENGTH = 8

export function useChangePassword() {
  const form = reactive<ChangePasswordForm>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const errors = reactive<ChangePasswordErrors>({})
  const isLoading = ref(false)

  const validate = (): boolean => {
    errors.oldPassword = undefined
    errors.newPassword = undefined
    errors.confirmPassword = undefined

    if (!form.oldPassword) {
      errors.oldPassword = 'Old password is required.'
    }

    if (!form.newPassword) {
      errors.newPassword = 'New password is required.'
    } else if (form.newPassword.length < MIN_PASSWORD_LENGTH) {
      errors.newPassword = `New password must be at least ${MIN_PASSWORD_LENGTH} characters.`
    } else if (form.newPassword === form.oldPassword) {
      errors.newPassword = 'New password must be different from the old password.'
    }

    if (!form.confirmPassword) {
      errors.confirmPassword = 'Please confirm your new password.'
    } else if (form.confirmPassword !== form.newPassword) {
      errors.confirmPassword = 'Passwords do not match.'
    }

    return !errors.oldPassword && !errors.newPassword && !errors.confirmPassword
  }

  const resetForm = () => {
    form.oldPassword = ''
    form.newPassword = ''
    form.confirmPassword = ''
  }

  const handleSubmit = async () => {
    if (!validate()) return

    isLoading.value = true

    try {
      // TODO: Ganti dengan pemanggilan API service yang sesuai
      // await authService.changePassword({ ... })
      resetForm()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // TODO: Tangani error dari API (misal: old password salah)
      // errors.oldPassword = 'Old password is incorrect.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    form,
    errors,
    isLoading,
    handleSubmit,
  }
}
