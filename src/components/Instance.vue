<template>
  <a href="#" class="block hover:bg-gray-50">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-indigo-600 truncate">
          {{ product.name }}
        </p>
        <p class="flex items-center text-sm text-gray-500">
          {{ quantity }}
          {{ product.unit }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-gray-500 truncate">
          {{ space.name }}
        </p>
        <p class="flex items-center text-sm text-gray-500">
          {{ purchaseDate }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-gray-500 truncate">
          {{ space.group.name }}
        </p>
        <p class="flex items-center text-sm text-gray-500">
          {{ untilDate }}
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
  product: {
    type: Object,
    default: () => ({
      name: '',
      unit: '',
      defaultQuantity: 1,
    }),
  },
  space: {
    type: Object,
    default: () => ({
      name: '',
      group: {
        name: '',
      },
    }),
  },
  quantity: { type: Number, default: 1 },
  purchaseDate: { type: Date, default: () => new Date() },
  untilDate: { type: Date, default: () => new Date() },
})
</script>

<style></style>
