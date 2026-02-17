import type { RouteRecordRaw } from 'vue-router'
import DashboardPage from '@/views/admin/DashboardPage.vue'
import ChangePasswordPage from '@/views/admin/ChangePasswordPage.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DashboardLayout,
    meta: { requiresAuth: true, roles: ['admin', 'editor'] },
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: DashboardPage,
      },
      {
        path: 'change-password',
        name: 'admin.change-password',
        component: ChangePasswordPage,
      },
    ],
  },
]

export default adminRoutes
