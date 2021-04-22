<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 to-transparent dark:text-gray-200"
  >
    <Navigation />
    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            class="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-200"
          >
            {{ route.name }}<span id="teleport-title"></span>
          </h1>
        </div>
      </header>
      <main class="pt-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import Navigation from './Navigation.vue'
const route = useRoute()
</script>
