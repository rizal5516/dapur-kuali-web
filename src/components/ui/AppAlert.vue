<template>
  <div
    v-if="visible"
    class="fixed top-6 right-5 z-[120] flex flex-col gap-3 min-w-[320px] max-w-sm"
  >
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-8"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-8"
    >
      <div
        v-if="visible"
        :class="alertClasses"
        class="alert flex items-center gap-2 rounded-xl p-4 shadow-lg border"
        role="alert"
        :aria-live="type === 'error' ? 'assertive' : 'polite'"
      >
        <component :is="iconComponent" class="size-5 stroke-[1.5] flex-shrink-0" />

        <span class="flex-1">{{ message }}</span>

        <button
          class="ml-auto cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
          type="button"
          aria-label="Close"
          @click="handleClose"
        >
          ✕
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, defineComponent, h } from 'vue'

interface Props {
  message: string | null
  type?: 'success' | 'error' | 'info' | 'warning'
  autoDismiss?: boolean
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  autoDismiss: true,
  duration: 5000,
})

const emit = defineEmits<{
  close: []
}>()

const visible = computed(() => !!props.message)

const alertClasses = computed(() => {
  const colorMap = {
    success: '[--color:var(--color-success)]',
    error: '[--color:var(--color-danger)]',
    warning: '[--color:var(--color-warning)]',
    info: '[--color:var(--color-info)]',
  }

  return [
    'bg-(--color)/20',
    'border-(--color)/60',
    'text-(--color)',
    colorMap[props.type] || colorMap.info,
  ]
})

// SVG Icons as functional components
const ErrorIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
      },
      [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('path', { d: 'M12 8v4' }),
        h('path', { d: 'M12 16h.01' }),
      ],
    ),
})

const SuccessIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
      },
      [h('path', { d: 'M20 6 9 17l-5-5' })],
    ),
})

const InfoIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
      },
      [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('path', { d: 'M12 16v-4' }),
        h('path', { d: 'M12 8h.01' }),
      ],
    ),
})

const WarningIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
      },
      [
        h('path', {
          d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
        }),
        h('path', { d: 'M12 9v4' }),
        h('path', { d: 'M12 17h.01' }),
      ],
    ),
})

const iconComponent = computed(() => {
  const iconMap = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
  }
  return iconMap[props.type] || InfoIcon
})

let autoDismissTimer: ReturnType<typeof setTimeout> | null = null

const clearTimer = () => {
  if (autoDismissTimer) {
    clearTimeout(autoDismissTimer)
    autoDismissTimer = null
  }
}

const handleClose = () => {
  clearTimer()
  emit('close')
}

// Auto dismiss ketika message berubah
watch(
  () => props.message,
  (newMessage) => {
    clearTimer()

    if (newMessage && props.autoDismiss) {
      autoDismissTimer = setTimeout(() => {
        emit('close')
      }, props.duration)
    }
  },
  { immediate: true },
)

// Cleanup on unmount
import { onBeforeUnmount } from 'vue'
onBeforeUnmount(() => {
  clearTimer()
})
</script>
