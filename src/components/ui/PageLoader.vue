<script setup lang="ts">
defineProps<{
  show: boolean
  opacity?: string
}>()
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="page-loader bg-background fixed inset-0 z-[100] flex items-center justify-center transition-opacity"
      :style="opacity ? { opacity } : {}"
      aria-hidden="true"
    >
      <div class="loader-spinner !w-14"></div>
    </div>
  </transition>
</template>
