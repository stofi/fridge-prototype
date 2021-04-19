<template>
  <div
    class="grid grid-cols-1 md:grid-cols-12 px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700"
  >
    <div class="col-span-11">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-brand truncate">
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
    <div class="col-span-1 flex justify-end">
      <button
        @click="$emit('remove')"
        class="inline-flex items-center text-gray-500 focus:outline-none focus:text-red-500"
      >
        <TrashIcon class="block h-6 w-6 fill-current" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
  TrashIcon,
} from '@heroicons/vue/solid'
import { defineProps } from 'vue'
import ButtonAdd from '../Button/ButtonAdd.vue'

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
  purchaseDate: { type: String },
  untilDate: { type: String },
})
</script>

<style></style>
