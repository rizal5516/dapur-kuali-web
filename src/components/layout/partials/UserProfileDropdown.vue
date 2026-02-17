<template>
  <div class="flex flex-col gap-2.5 px-6 py-5">
    <!-- User Info -->
    <div class="flex flex-col gap-0.5">
      <template v-if="isLoading">
        <div class="h-3.5 w-28 animate-pulse rounded bg-foreground/10"></div>
        <div class="mt-1 h-2.5 w-20 animate-pulse rounded bg-foreground/10"></div>
      </template>
      <template v-else>
        <div class="font-medium truncate max-w-[180px]">{{ sanitizedName }}</div>
        <div class="mt-0.5 text-xs opacity-70 truncate max-w-[180px]">{{ sanitizedRole }}</div>
      </template>
    </div>

    <div class="bg-foreground/5 h-px"></div>

    <!-- Menu Items -->
    <div class="flex flex-col gap-0.5">
      <router-link
        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 transition-colors"
        :to="{ name: 'admin.change-password' }"
      >
        <component
          :is="menuIcons.fileLock"
          v-bind="decorativeIconAttrs"
          :size="16"
          :stroke-width="1.5"
          class="[--color:currentColor] stroke-(--color) fill-(--color)/25 flex-none"
        />
        <span>Change Password</span>
      </router-link>
    </div>

    <div class="bg-foreground/5 h-px"></div>

    <!-- Logout -->
    <div class="flex flex-col gap-0.5">
      <button
        type="button"
        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        :disabled="isLoggingOut"
        @click="handleLogout"
      >
        <component
          :is="menuIcons.power"
          v-bind="decorativeIconAttrs"
          :size="16"
          :stroke-width="1.5"
          class="[--color:currentColor] stroke-(--color) fill-(--color)/25 flex-none"
          :class="{ 'animate-spin': isLoggingOut }"
        />
        <span>Logout</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMenuIcons, decorativeIconAttrs } from '@/composables/useMenuIcons'
import { useLogout } from '@/composables/useLogout'
import { useAdminProfile } from '@/composables/useAdminProfile'

const MAX_DISPLAY_LENGTH = 60

const menuIcons = useMenuIcons()
const { isLoggingOut, handleLogout } = useLogout()
const { displayName, displayRole, isLoading } = useAdminProfile()

const sanitizedName = computed(() => (displayName.value ?? '').slice(0, MAX_DISPLAY_LENGTH))
const sanitizedRole = computed(() => (displayRole.value ?? '').slice(0, MAX_DISPLAY_LENGTH))
</script>
