import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  // {
  //   path: '/403',
  //   name: 'forbidden',
  //   component: () => import('@/views/errors/ForbiddenPage.vue'),
  // },
]

export default publicRoutes
