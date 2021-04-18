<template>
  <a href="#" class="block hover:bg-gray-50">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-indigo-600 truncate">
          {{ name }}
        </p>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="sm:flex">
          <p class="flex items-center text-sm text-gray-500">
            <UsersIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {{ members }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/vue/solid'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  memebers: {
    type: Array,
    default: () => [],
  },
})
</script>

<style></style>
