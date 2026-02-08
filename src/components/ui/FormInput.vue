<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-medium text-foreground/70 px-1">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="handleInput"
      @blur="emit('blur')"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
      :class="inputClasses"
      class="h-10 w-full rounded-md border bg-background ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 box block min-w-full px-5 py-6 xl:min-w-[28rem] transition-colors"
    />

    <span
      v-if="error"
      :id="`${id}-error`"
      class="text-xs text-danger px-1"
      role="alert"
      aria-live="polite"
    >
      {{ error }}
    </span>

    <span v-if="hint && !error" class="text-xs text-foreground/50 px-1">
      {{ hint }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  modelValue: string | number
  placeholder?: string
  label?: string
  error?: string
  hint?: string
  autocomplete?: string
  inputmode?: 'text' | 'email' | 'numeric' | 'tel' | 'url' | 'search'
  disabled?: boolean
  readonly?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  readonly: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: []
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const inputClasses = computed(() => ({
  'border-danger/60 focus-visible:ring-danger/20': !!props.error,
  'border-foreground/10 focus-visible:ring-foreground/5': !props.error,
}))
</script>
