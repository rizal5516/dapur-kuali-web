import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
]

export default publicRoutes
