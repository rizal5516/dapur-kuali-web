<template>
  <div
    class="content h-screen transition-[margin,width] duration-200 pt-8 pb-12 px-7 z-10 relative before:absolute before:inset-y-4 before:-ml-px before:right-4 before:opacity-[.07] before:left-4 xl:before:left-0 before:bg-foreground before:rounded-4xl after:absolute after:inset-y-4 after:-ml-px after:right-4 after:left-4 xl:after:left-0 after:bg-[color-mix(in_oklch,_var(--color-background),_var(--color-foreground)_2%)] after:rounded-4xl after:border after:border-foreground/[.15] dark:after:opacity-[.59] xl:ml-[275px] [&.content--compact]:xl:ml-[110px]"
  >
    <div class="h-full overflow-x-hidden">
      <div
        class="content__scroll-area relative z-20 -mr-7 h-full overflow-y-auto pl-4 pr-11 transition-[margin] duration-200 xl:pl-0"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
