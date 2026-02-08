<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 box w-full px-4 py-5"
    @click="handleClick"
  >
    <span v-if="!loading" class="flex items-center gap-2">
      <slot name="icon" />
      <slot>{{ label }}</slot>
    </span>

    <span v-else class="flex items-center gap-2">
      <div class="loader-dots ![--color:--alpha(var(--color-primary)/80%)]"></div>
      {{ loadingText }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  label?: string
  loadingText?: string
  loading?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'submit',
  label: 'Submit',
  loadingText: 'Memproses...',
  loading: false,
  disabled: false,
  variant: 'primary',
  fullWidth: true,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const variantClasses = {
    primary:
      'bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-primary)]',
    secondary:
      'bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-secondary)]',
    danger:
      'bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-danger)]',
    success:
      'bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-success)]',
  }

  return [variantClasses[props.variant], props.fullWidth ? 'w-full' : 'w-auto']
})

const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit('click', event)
  }
}
</script>
