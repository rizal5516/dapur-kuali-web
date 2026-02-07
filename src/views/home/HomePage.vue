<script setup lang="ts">
import { onMounted } from 'vue'
import { checkHealth } from '@/services/health.service'

onMounted(async () => {
  try {
    const data = await checkHealth()
    console.log('API Health:', data)
  } catch (err) {
    console.error('Health check failed', err)
  }
})
</script>

<template>
  <h1>API Health Test</h1>
</template>
