<template>
  <PageLoader :show="showLoader" />

  <AuthBackground>
    <div class="p-3 sm:px-8 relative h-full">
      <div class="container relative z-10 mx-auto sm:px-20">
        <div class="block grid-cols-2 gap-4 xl:grid">
          <AuthHero />

          <AuthContent>
            <RouterView />
          </AuthContent>
        </div>
      </div>
    </div>
  </AuthBackground>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { usePageLoader } from '@/composables/usePageLoader'
import PageLoader from '@/components/ui/PageLoader.vue'
import AuthBackground from '@/components/ui/auth/AuthBackground.vue'
import AuthHero from '@/components/ui/auth/AuthHero.vue'
import AuthContent from '@/components/ui/auth/AuthContent.vue'

const { showLoader, start } = usePageLoader({
  minDuration: 1000,
  fadeDuration: 200,
  onError: (err) => {
    console.error('Dashboard init failed:', err)
  },
})

onMounted(async () => {
  start(async () => {
    await nextTick()
  })
})
</script>
