<template>
  <aside
    class="side-menu text-background dark:text-foreground xl:ml-0 transition-[margin] duration-200 fixed top-0 left-0 z-50 group before:content-[''] before:fixed before:inset-0 before:bg-black/80 dark:before:bg-foreground/5 before:backdrop-blur before:xl:hidden after:content-[''] after:absolute after:inset-0 after:bg-primary after:xl:hidden dark:after:bg-background after:bg-noise [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:before:block -ml-[275px] before:hidden"
  >
    <!-- Close button (mobile) -->
    <div
      class="close-mobile-menu fixed ml-[275px] xl:hidden z-50 cursor-pointer [&.close-mobile-menu--mobile-menu-open]:block hidden"
    >
      <div class="ml-5 mt-5 flex size-10 items-center justify-center">
        <component
          :is="menuIcons.closeIcon"
          v-bind="decorativeIconAttrs"
          class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
        />
      </div>
    </div>

    <div
      class="side-menu__content z-20 pt-5 pb-[7.5rem] relative w-[275px] duration-200 transition-[width] group-[.side-menu--collapsed]:xl:w-[110px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] h-screen flex flex-col"
    >
      <SidebarLogo />
      <SidebarNavigation />

      <!-- Profile / Account block -->
      <div
        class="side-menu__account group/profile absolute inset-x-0 bottom-0 mx-4 mb-8 transition-[width] group-[.side-menu--collapsed.side-menu--on-hover]:block group-[.side-menu--collapsed]:justify-center xl:group-[.side-menu--collapsed]:flex"
      >
        <!-- Collapsed / expanded pill -->
        <div
          class="bg-background/10 border-background/20 dark:bg-foreground/[.02] dark:border-foreground/[.09] flex cursor-pointer items-center rounded-full border p-2.5 opacity-80 backdrop-blur-2xl transition hover:opacity-100"
        >
          <!-- Avatar icon -->
          <div
            class="border-background/20 dark:border-foreground/20 relative h-10 w-10 flex-none rounded-full border-4 flex items-center justify-center"
          >
            <component
              :is="menuIcons.userCircle"
              v-bind="decorativeIconAttrs"
              class="size-8 [--color:currentColor] stroke-(--color) fill-(--color)/25"
              :stroke-width="1.5"
            />
          </div>

          <div
            class="ms-3 flex w-full items-center overflow-hidden transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:ms-3 group-[.side-menu--collapsed.side-menu--on-hover]:w-full group-[.side-menu--collapsed.side-menu--on-hover]:opacity-100 xl:group-[.side-menu--collapsed]:ms-0 xl:group-[.side-menu--collapsed]:w-0 xl:group-[.side-menu--collapsed]:opacity-0"
          >
            <div class="w-28">
              <template v-if="isLoading">
                <div class="h-3.5 w-20 animate-pulse rounded bg-background/30"></div>
                <div class="mt-1 h-2.5 w-14 animate-pulse rounded bg-background/20"></div>
              </template>
              <template v-else>
                <div class="w-full truncate font-medium">{{ sanitizedName }}</div>
                <div class="w-full truncate text-xs opacity-60">{{ sanitizedRole }}</div>
              </template>
            </div>
            <component
              :is="menuIcons.moveRight"
              v-bind="decorativeIconAttrs"
              :size="16"
              :stroke-width="1.5"
              class="[--color:currentColor] stroke-(--color) fill-(--color)/25 me-4 ms-auto opacity-50"
            />
          </div>
        </div>

        <!-- Hover dropdown -->
        <div class="hidden group-hover/profile:block">
          <div
            class="box before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md text-foreground before:shadow-foreground/5 absolute bottom-0 left-[100%] z-50 ml-2 flex w-64 flex-col before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl"
          >
            <UserProfileDropdown />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import SidebarLogo from './partials/SidebarLogo.vue'
import SidebarNavigation from './partials/SidebarNavigation.vue'
import UserProfileDropdown from './partials/UserProfileDropdown.vue'
import { useMenuIcons, decorativeIconAttrs } from '@/composables/useMenuIcons'
import { useAdminProfile } from '@/composables/useAdminProfile'

const MAX_DISPLAY_LENGTH = 60

const menuIcons = useMenuIcons()
const { displayName, displayRole, isLoading, fetchProfileIfMissing } = useAdminProfile()

const sanitizedName = computed(() => (displayName.value ?? '').slice(0, MAX_DISPLAY_LENGTH))
const sanitizedRole = computed(() => (displayRole.value ?? '').slice(0, MAX_DISPLAY_LENGTH))

onMounted(() => {
  fetchProfileIfMissing()
})
</script>
