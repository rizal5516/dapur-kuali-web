<template>
  <!-- Page Loader (optional) -->
  <div
    v-if="showLoader"
    class="page-loader bg-background fixed inset-0 z-[100] flex items-center justify-center transition-opacity"
    aria-hidden="true"
    :style="{ opacity: loaderOpacity }"
  >
    <div class="loader-spinner !w-14"></div>
  </div>

  <div
    class="relative h-screen lg:overflow-hidden bg-primary bg-noise xl:bg-background xl:bg-none before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[12%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[6deg] before:bg-primary/[.95] before:bg-noise before:rounded-[35%] after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[28%] after:-mb-[16%] after:-ml-[12%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[6deg] after:border after:bg-accent after:bg-cover after:blur-xl after:rounded-[35%] after:border-[20px] after:border-primary"
  >
    <div
      class="p-3 sm:px-8 relative h-full before:hidden before:xl:block before:w-[57%] before:-mt-[20%] before:-mb-[13%] before:-ml-[12%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-6deg] before:bg-primary/40 before:bg-noise before:border before:border-primary/50 before:opacity-60 before:rounded-[20%]"
    >
      <div class="container relative z-10 mx-auto sm:px-20">
        <div class="block grid-cols-2 gap-4 xl:grid">
          <div class="hidden min-h-screen flex-col xl:flex">
            <a class="flex items-center pt-10" href="#" @click.prevent>
              <img class="w-6" src="/assets/images/logo.svg" alt="Logo" />
              <span class="ml-3 text-xl font-medium text-white">
                Dashboard <span class="font-light opacity-70">CMS Dapur Kuali</span>
              </span>
            </a>

            <div class="my-auto">
              <img class="-mt-16 w-1/2" src="/assets/images/illustration.svg" alt="Illustration" />
              <div class="mt-10 text-4xl font-medium leading-tight text-white">
                A few more clicks to <br />
                sign in to your account.
              </div>
              <div class="mt-5 text-lg text-white opacity-60">
                Manage all your e-commerce accounts in one place
              </div>
            </div>
          </div>

          <div class="my-10 flex h-screen py-5 xl:my-0 xl:h-auto xl:py-0">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (w?.lucide?.createIcons) w.lucide.createIcons()
    fadeTimer = window.setTimeout(() => {
      loaderOpacity.value = '0'

      hideTimer = window.setTimeout(() => {
        showLoader.value = false
        loaderOpacity.value = '1'
      }, FADE_MS)
    }, MIN_LOADER_MS)
  } catch (e) {
    console.error('Failed to init AuthLayout scripts:', e)
    showLoader.value = false
  }
})

onBeforeUnmount(() => {
  clearTimers()
})
</script>
