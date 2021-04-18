<template>
  <div
    class="grid grid-cols-1 md:grid-cols-12 hover:bg-gray-50 px-4 py-4 sm:px-6"
  >
    <div class="col-span-11 flex items-center justify-between">
      <p class="text-sm font-medium text-indigo-600 truncate">
        {{ name }}
      </p>
      <p class="flex items-center text-sm text-gray-500">
        {{ defaultQuantity }}
        {{ unit }}
      </p>
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
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  memebers: {
    type: Array,
    default: () => [],
  },
  unit: {
    type: String,
    validator(value) {
      return ['UNIT', 'GRAM', 'LITER'].includes(value)
    },
  },
  defaultQuantity: {
    type: Number,
    default: 1,
  },
})

defineEmit(['remove'])
</script>

<style></style>
