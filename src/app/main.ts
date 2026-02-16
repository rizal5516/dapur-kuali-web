import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '../router'
import { initMidoneAuth } from '../plugins/midone'
import LucideIconsPlugin from '@/plugins/lucide'

async function bootstrap() {
  await initMidoneAuth()

  const app = createApp(App)

  app.use(createPinia())
  app.use(LucideIconsPlugin)
  app.use(router)

  app.mount('#app')
}

bootstrap()
