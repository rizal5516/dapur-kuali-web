import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '../router'
import { initMidone } from '../plugins/midone'

async function bootstrap() {
  await initMidone()

  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
}

bootstrap()
