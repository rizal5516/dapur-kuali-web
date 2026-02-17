<template>
  <div class="hidden min-h-screen flex-col xl:flex">
    <router-link :to="{ name: 'login' }" class="flex items-center pt-10">
      <img class="w-6" :src="logo" alt="Logo" />

      <span class="ml-3 text-xl font-medium text-white">
        Dashboard <span class="font-light opacity-70">CMS Dapur Kuali</span>
      </span>
    </router-link>

    <div class="my-auto">
      <img class="-mt-16 w-1/2" :src="illustration" alt="Illustration" />
      <div class="mt-10 text-4xl font-medium leading-tight text-white">
        A few more clicks to <br />
        sign in to your account.
      </div>
      <div class="mt-5 text-lg text-white opacity-60">
        Manage all your e-commerce accounts in one place
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '/assets/images/logo.svg'
import illustration from '/assets/images/illustration.svg'
</script>
