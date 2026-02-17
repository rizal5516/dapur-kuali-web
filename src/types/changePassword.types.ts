export interface ChangePasswordPayload {
  current_password: string
  new_password: string
  new_password_confirmation: string
}

export interface ChangePasswordResponse {
  message: string
}

export interface ChangePasswordFormErrors {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export interface ChangePasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}
