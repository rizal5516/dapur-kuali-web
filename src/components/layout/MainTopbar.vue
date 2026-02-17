<template>
  <header
    class="top-bar group -mt-2 [&.scrolled]:sticky [&.scrolled]:inset-x-0 [&.scrolled]:top-0 [&.scrolled]:z-[999] [&.scrolled]:mt-0"
  >
    <div
      class="flex h-16 items-center gap-5 border-b transition-all group-[.scrolled]:px-5 group-[.scrolled]:rounded-2xl group-[.scrolled]:bg-background group-[.scrolled]:border group-[.scrolled]:shadow-lg group-[.scrolled]:shadow-foreground/5"
    >
      <!-- Mobile menu trigger -->
      <div
        class="open-mobile-menu bg-background mr-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border xl:hidden"
        role="button"
        aria-label="Buka menu navigasi"
        tabindex="0"
      >
        <component
          :is="menuIcons.chartColumn"
          v-bind="decorativeIconAttrs"
          :size="16"
          :stroke-width="1.5"
          class="[--color:currentColor] stroke-(--color) fill-(--color)/25 rotate-90"
        />
      </div>

      <!-- Breadcrumb -->
      <ul
        class="truncate gap-x-6 [--color-link:var(--color-primary)] [--color-base:var(--color-foreground)] mr-auto hidden xl:flex"
      >
        <li
          class="[&:not(:last-child)>a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
        >
          <router-link :to="{ name: 'admin.dashboard' }">Dashboard</router-link>
        </li>
      </ul>

      <!-- Profile avatar + dropdown -->
      <div class="group/profile relative size-9 flex-none">
        <span
          class="block relative flex-none rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] size-full flex items-center justify-center cursor-pointer"
          role="button"
          aria-label="Menu profil pengguna"
          tabindex="0"
        >
          <component
            :is="menuIcons.userCircle"
            v-bind="decorativeIconAttrs"
            class="size-7 [--color:currentColor] stroke-(--color) fill-(--color)/25"
            :stroke-width="1.5"
          />
        </span>

        <!-- Hover dropdown -->
        <div class="hidden group-hover/profile:block">
          <div
            class="box before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md before:shadow-foreground/5 absolute right-0 top-0 z-50 -mr-0.5 -mt-0.5 flex w-64 flex-col before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl"
          >
            <UserProfileDropdown />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import UserProfileDropdown from './partials/UserProfileDropdown.vue'
import { useMenuIcons, decorativeIconAttrs } from '@/composables/useMenuIcons'
import { useAdminProfile } from '@/composables/useAdminProfile'

const menuIcons = useMenuIcons()
const { fetchProfileIfMissing } = useAdminProfile()

onMounted(() => {
  fetchProfileIfMissing()
})
</script>
