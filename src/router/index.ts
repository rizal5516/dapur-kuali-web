import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import publicRoutes from './routes/public.routes'
import authRoutes from './routes/auth.routes'
import adminRoutes from './routes/admin.routes'
import { safeRedirectTarget } from '@/utils/safeRedirect.utils'

import { useAuthStore } from '@/stores/auth.store'

const routes: RouteRecordRaw[] = [
  ...publicRoutes,
  ...authRoutes,
  ...adminRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  await auth.bootstrap()

  const requiresAuth = Boolean(to.meta.requiresAuth)
  const guestOnly = Boolean(to.meta.guestOnly)

  if (guestOnly && auth.isAuthenticated) {
    return {
      path: safeRedirectTarget(to.query.redirect, auth.role, '/dashboard'),
    }
  }

  if (requiresAuth && !auth.isAuthenticated) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  }
  const allowedRoles = to.meta.roles as Array<'admin' | 'editor'> | undefined
  if (requiresAuth && allowedRoles?.length) {
    if (!auth.role || !allowedRoles.includes(auth.role)) {
      return { path: '/403' }
    }
  }

  return true
})

export default router
