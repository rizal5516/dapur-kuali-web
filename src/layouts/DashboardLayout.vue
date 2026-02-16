<template>
  <div
    v-if="showLoader"
    class="page-loader bg-background fixed inset-0 z-[100] flex items-center justify-center transition-opacity"
    aria-hidden="true"
    :style="{ opacity: loaderOpacity }"
  >
    <div class="loader-spinner !w-14"></div>
  </div>

  <div class="dashboard-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { useMidone } from '@/composables/useMidone'

const { loadDashboardScripts } = useMidone()

const showLoader = ref(true)
const loaderOpacity = ref('1')

let fadeTimer: number | null = null
let hideTimer: number | null = null

const MIN_LOADER_MS = 1000
const FADE_MS = 200

function clearTimers() {
  if (fadeTimer) window.clearTimeout(fadeTimer)
  if (hideTimer) window.clearTimeout(hideTimer)
  fadeTimer = hideTimer = null
}

onMounted(async () => {
  try {
    await nextTick()
    await loadDashboardScripts()

    fadeTimer = window.setTimeout(() => {
      loaderOpacity.value = '0'

      hideTimer = window.setTimeout(() => {
        showLoader.value = false
        loaderOpacity.value = '1'
      }, FADE_MS)
    }, MIN_LOADER_MS)
  } catch (e) {
    console.error('Failed to init DashboardLayout scripts:', e)
    showLoader.value = false
  }
})

onBeforeUnmount(() => {
  clearTimers()
})
</script>
