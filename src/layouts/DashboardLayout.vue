<template>
  <PageLoader :show="showLoader" />

  <div
    class="rubick min-h-screen dark:bg-background before:bg-primary dark:before:bg-foreground/[.01] before:fixed before:inset-0 before:bg-noise after:bg-accent after:bg-contain after:fixed after:inset-0 after:blur-xl dark:after:opacity-20"
  >
    <Sidebar :is-compact="isSidebarCompact" @toggle-compact="toggleSidebarCompact" />

    <div
      class="content h-screen transition-[margin,width] duration-200 pt-8 pb-12 px-7 z-10 relative before:absolute before:inset-y-4 before:-ml-px before:right-4 before:opacity-[.07] before:left-4 xl:before:left-0 before:bg-foreground before:rounded-4xl after:absolute after:inset-y-4 after:-ml-px after:right-4 after:left-4 xl:after:left-0 after:bg-[color-mix(in_oklch,_var(--color-background),_var(--color-foreground)_2%)] after:rounded-4xl after:border after:border-foreground/[.15] dark:after:opacity-[.59] xl:ml-[275px] [&.content--compact]:xl:ml-[110px]"
    >
      <div class="h-full overflow-x-hidden">
        <div
          class="content__scroll-area relative z-20 -mr-7 h-full overflow-y-auto pl-4 pr-11 transition-[margin] duration-200 xl:pl-0"
        >
          <Topbar @toggle-sidebar="toggleSidebarCompact" />
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useMidone } from '@/composables/useMidone'
import { usePageLoader } from '@/composables/usePageLoader'
import PageLoader from '@/components/ui/PageLoader.vue'
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
