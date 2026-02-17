<template>
  <div
    class="relative z-10 hidden h-[65px] w-[275px] flex-none items-center overflow-hidden px-6 duration-200 xl:flex group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] group-[.side-menu--collapsed]:xl:w-[110px]"
  >
    <router-link
      :to="{ name: 'admin.dashboard' }"
      class="flex items-center transition-[margin] duration-200 xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-2 group-[.side-menu--collapsed]:xl:ml-6"
    >
      <img class="size-5" :src="logo" alt="Logo aplikasi" />
      <div
        class="ml-3.5 text-nowrap transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0"
      >
        <span class="text-base font-medium">CMS </span>
        <span class="text-base font-light">Dapur Kuali</span>
      </div>
    </router-link>

    <!-- Toggle compact menu -->
    <button
      type="button"
      aria-label="Toggle compact menu"
      class="toggle-compact-menu border-background/20 bg-background/10 dark:bg-foreground/[.02] dark:border-foreground/[.09] ml-auto hidden items-center justify-center rounded-md border py-0.5 pl-0.5 pr-1 opacity-70 transition-[opacity,transform] hover:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 2xl:flex cursor-pointer"
    >
      <component
        :is="menuIcons.chevronLeft"
        v-bind="decorativeIconAttrs"
        class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import logo from '/assets/images/logo.svg'
import { useMenuIcons, decorativeIconAttrs } from '@/composables/useMenuIcons'

const menuIcons = useMenuIcons()
</script>
