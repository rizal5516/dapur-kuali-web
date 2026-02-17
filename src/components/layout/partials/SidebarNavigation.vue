<template>
  <div
    class="w-full h-full z-20 px-4 overflow-y-auto overflow-x-hidden pb-3 [&:-webkit-scrollbar]:w-0 scroll-smooth [&_.simplebar-scrollbar]:before:!bg-background/70 [-webkit-mask-image:_linear-gradient(to_top,_rgba(0,_0,_0,_0),_black_30px),_linear-gradient(to_bottom,_rgba(0,_0,_0,_0),_black_30px)] [-webkit-mask-composite:_destination-in]"
  >
    <ul class="scrollable">
      <li class="side-menu__group-label">PAGES</li>
      <li>
        <router-link
          :to="{ name: 'admin.dashboard' }"
          class="side-menu__link"
          active-class="side-menu__link--active"
        >
          <component
            :is="menuIcons.dashboard"
            v-bind="decorativeIconAttrs"
            class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
          />
          <div class="side-menu__link__title">Dashboard</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useMenuIcons, decorativeIconAttrs } from '@/composables/useMenuIcons'

const menuIcons = useMenuIcons()
</script>
