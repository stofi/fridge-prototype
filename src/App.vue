<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <MenuGroup :target="target" />
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3" ref="target"></div>
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 v-if="$route.name" class="text-2xl font-semibold text-gray-900">
              {{ $route.name }}
            </h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MenuGroup from './components/Menu/Group.vue'

const target = ref(null)

</script>
