<template>
  <div
    class="box relative p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md mx-auto my-auto w-full px-5 py-8 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-24 xl:w-auto xl:p-0 xl:before:hidden xl:after:hidden"
  >
    <h2 class="text-center text-2xl font-semibold xl:text-left xl:text-3xl">
      {{ title }}
    </h2>

    <div v-if="description" class="mt-2 text-center opacity-70 xl:text-left">
      {{ description }}
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

defineProps<Props>()
</script>
