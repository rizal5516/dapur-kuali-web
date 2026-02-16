<template>
  <header
    class="top-bar group -mt-2 [&.scrolled]:sticky [&.scrolled]:inset-x-0 [&.scrolled]:top-0 [&.scrolled]:z-[999] [&.scrolled]:mt-0"
  >
    <div
      class="flex h-16 items-center gap-5 border-b transition-all group-[.scrolled]:px-5 group-[.scrolled]:rounded-2xl group-[.scrolled]:bg-background group-[.scrolled]:border group-[.scrolled]:shadow-lg group-[.scrolled]:shadow-foreground/5"
    >
      <div
        class="open-mobile-menu bg-background mr-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border xl:hidden"
      >
        <component
          :is="menuIcons.chartColumn"
          :size="16"
          :stroke-width="1.5"
          class="[--color:currentColor] stroke-(--color) fill-(--color)/25 rotate-90"
        />
      </div>
      <ul
        class="truncate gap-x-6 [--color-link:var(--color-primary)] [--color-base:var(--color-foreground)] mr-auto hidden xl:flex"
      >
        <li
          class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
        >
          <a href="">Apps</a>
        </li>
        <li
          class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
        >
          <a href="">Dashboards</a>
        </li>
        <li
          class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
        >
          <a href="">Overview</a>
        </li>
      </ul>
      <div class="group/profile relative size-9 flex-none">
        <span
          data-content=""
          class="tooltip border-(--color)/5 block relative flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] size-full"
        >
          <img
            class="absolute top-0 size-full object-cover"
            src="/assets/images/fakers/profile-1.jpg"
            alt="Midone - Tailwind Admin Dashboard Template"
          />
        </span>
        <div class="hidden group-hover/profile:block">
          <div
            class="box p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md before:shadow-foreground/5 absolute right-0 top-0 z-50 -mr-0.5 -mt-0.5 flex w-64 flex-col gap-2.5 px-6 py-5 before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl"
          >
            <div class="flex flex-col gap-0.5">
              <div class="font-medium">Johnny Depp</div>
              <div class="mt-0.5 text-xs opacity-70">Frontend Engineer</div>
            </div>
            <div class="bg-foreground/5 h-px"></div>
            <div class="flex flex-col gap-0.5">
              <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                <component
                  :is="menuIcons.users"
                  :size="16"
                  :stroke-width="1.5"
                  class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                />
                Profile
              </a>
              <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                <component
                  :is="menuIcons.fileLock"
                  :size="16"
                  :stroke-width="1.5"
                  class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                />
                Reset Password
              </a>
            </div>
            <div class="bg-foreground/5 h-px"></div>
            <div class="flex flex-col gap-0.5">
              <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                <component
                  :is="menuIcons.power"
                  :size="16"
                  :stroke-width="1.5"
                  class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useMenuIcons } from '@/composables/useMenuIcons'

const menuIcons = useMenuIcons()
</script>
