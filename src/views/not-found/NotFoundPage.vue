<template>
  <div>
    <!-- 404 Page -->
    <div
      class="relative py-2 before:bg-primary dark:before:bg-foreground/[.01] before:fixed before:inset-0 before:bg-noise after:bg-accent after:bg-contain after:fixed after:inset-0 after:blur-xl dark:after:opacity-20"
    >
      <div class="container relative z-10 mx-auto">
        <div
          class="flex h-screen flex-col items-center justify-center text-center lg:flex-row lg:text-left"
        >
          <div class="lg:mr-20">
            <img
              class="h-48 w-[450px] lg:h-auto"
              src="/assets/images/error-illustration.svg"
              alt="Error illustration"
            />
          </div>

          <div class="mt-10 text-white lg:mt-0">
            <div class="text-9xl [text-shadow:_7px_7px_--alpha(var(--color-white)_/_20%)]">404</div>
            <div class="mt-8 text-xl font-medium lg:text-2xl">
              Oops. This page has gone missing.
            </div>
            <div class="mt-3 text-base opacity-70">
              You may have mistyped the address or the page may have moved.
            </div>

            <a
              class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-(--color)/5 h-10 box mt-10 border-white bg-transparent px-7 py-6 text-white"
              href="#"
              @click.prevent="goHome"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push({ name: 'home' }).catch(() => {})
}
</script>
