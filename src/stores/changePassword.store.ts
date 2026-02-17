import { defineStore } from 'pinia'
import { changePassword } from '@/services/changePassword.service'
import type { ChangePasswordPayload, ChangePasswordFormErrors } from '@/types/changePassword.types'
import type { AxiosError } from 'axios'

type ChangePasswordState = {
  isLoading: boolean
  successMessage: string
  errorMessage: string
  serverErrors: Partial<ChangePasswordFormErrors>
}

export const useChangePasswordStore = defineStore('changePassword', {
  state: (): ChangePasswordState => ({
    isLoading: false,
    successMessage: '',
    errorMessage: '',
    serverErrors: {},
  }),

  actions: {
    async submit(payload: ChangePasswordPayload): Promise<boolean> {
      this.isLoading = true
      this.successMessage = ''
      this.errorMessage = ''
      this.serverErrors = {}

      try {
        const res = await changePassword(payload)
        this.successMessage = res.message ?? 'Password changed successfully.'
        return true
      } catch (err) {
        const { fieldErrors, generalError } = extractServerErrors(err)
        this.serverErrors = fieldErrors
        this.errorMessage = generalError
        return false
      } finally {
        this.isLoading = false
      }
    },

    reset() {
      this.isLoading = false
      this.successMessage = ''
      this.errorMessage = ''
      this.serverErrors = {}
    },
  },
})

type LaravelValidationError = {
  message?: string
  errors?: Partial<Record<string, string[]>>
}

type ServerErrorResult = {
  fieldErrors: Partial<ChangePasswordFormErrors>
  generalError: string
}

function extractServerErrors(err: unknown): ServerErrorResult {
  const axiosErr = err as AxiosError<LaravelValidationError>
  const status = axiosErr.response?.status

  if (status === 422) {
    const laravelErrors = axiosErr.response?.data?.errors ?? {}
    return {
      fieldErrors: {
        ...(laravelErrors.current_password?.[0] && {
          currentPassword: laravelErrors.current_password[0],
        }),
        ...(laravelErrors.new_password?.[0] && {
          newPassword: laravelErrors.new_password[0],
        }),
        ...(laravelErrors.new_password_confirmation?.[0] && {
          confirmPassword: laravelErrors.new_password_confirmation[0],
        }),
      },
      generalError: '',
    }
  }

  if (status === 401) {
    return {
      fieldErrors: {},
      generalError: axiosErr.response?.data?.message ?? 'Current password is incorrect.',
    }
  }

  return {
    fieldErrors: {},
    generalError: 'Something went wrong. Please try again.',
  }
}
