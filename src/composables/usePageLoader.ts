import { ref, onBeforeUnmount } from 'vue'

type UsePageLoaderOptions = {
  minDuration?: number
  fadeDuration?: number
  onError?: (err: unknown) => void
}

export function usePageLoader(options: UsePageLoaderOptions = {}) {
  const MIN_DURATION = options.minDuration ?? 1000
  const FADE_DURATION = options.fadeDuration ?? 200

  const showLoader = ref(true)
  const opacity = ref('1')

  let fadeTimer: ReturnType<typeof setTimeout> | null = null
  let hideTimer: ReturnType<typeof setTimeout> | null = null

  const clearTimers = () => {
    if (fadeTimer) {
      clearTimeout(fadeTimer)
      fadeTimer = null
    }
    if (hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = null
    }
  }

  const start = async (task?: () => Promise<void>) => {
    const startTime = Date.now()

    try {
      if (task) {
        await task()
      }
    } catch (err) {
      options.onError?.(err)
      console.error('[usePageLoader] error:', err)
    }

    const elapsed = Date.now() - startTime
    const remaining = Math.max(0, MIN_DURATION - elapsed)

    fadeTimer = setTimeout(() => {
      opacity.value = '0'

      hideTimer = setTimeout(() => {
        showLoader.value = false
      }, FADE_DURATION)
    }, remaining)
  }

  onBeforeUnmount(() => {
    clearTimers()
  })

  return {
    showLoader,
    opacity,
    start,
  }
}
