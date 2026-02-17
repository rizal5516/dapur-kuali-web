<template>
  <PageLoader :show="showLoader" />

  <div
    class="rubick min-h-screen dark:bg-background before:bg-primary dark:before:bg-foreground/[.01] before:fixed before:inset-0 before:bg-noise after:bg-accent after:bg-contain after:fixed after:inset-0 after:blur-xl dark:after:opacity-20"
  >
    <Sidebar :is-compact="isSidebarCompact" @toggle-compact="toggleSidebarCompact" />

    <Content>
      <Topbar @toggle-sidebar="toggleSidebarCompact" />
      <RouterView />
    </Content>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useMidone } from '@/composables/useMidone'
import { usePageLoader } from '@/composables/usePageLoader'
import PageLoader from '@/components/ui/PageLoader.vue'
import Content from '@/components/layout/MainContent.vue'
import Sidebar from '@/components/layout/MainSidebar.vue'
import Topbar from '@/components/layout/MainTopbar.vue'

const isSidebarCompact = ref(false)

const toggleSidebarCompact = () => {
  isSidebarCompact.value = !isSidebarCompact.value
}

const { showLoader, start } = usePageLoader({
  minDuration: 1000,
  fadeDuration: 200,
  onError: (err) => {
    console.error('Dashboard init failed:', err)
  },
})

const { loadDashboardScripts } = useMidone()

onMounted(async () => {
  start(async () => {
    await nextTick()
    await loadDashboardScripts()
  })
})
</script>
