<template>
  <a href="#" class="block hover:bg-gray-50">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-indigo-600 truncate">
          {{ name }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-indigo-600 truncate">
          {{ group.name }}
        </p>
        <p class="flex items-center text-sm text-gray-500">
          {{ group.members }}
        </p>
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
  group: {
    type: Object,
    default: () => ({
      name: '',
      members: [],
    }),
  },
})
</script>

<style></style>
