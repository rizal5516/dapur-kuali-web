import type { RouteRecordRaw } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import ForgotPasswordPage from '@/views/auth/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/views/auth/ResetPasswordPage.vue'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: { guestOnly: true },
      },
      {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPasswordPage,
        meta: { guestOnly: true },
      },
      {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPasswordPage,
        meta: { guestOnly: true },
      },
    ],
  },
]

export default authRoutes
