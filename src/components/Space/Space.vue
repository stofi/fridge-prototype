<template>
  <div
    class="grid grid-cols-1 md:grid-cols-12 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-4 sm:px-6"
  >
    <div class="col-span-11">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-brand truncate">
          {{ name }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-brand truncate">
          {{ group.name }}
        </p>
        <p class="flex items-center text-sm text-gray-500">
          <UsersIcon
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span
            class="bg-gray-100 dark:bg-gray-900 px-2 rounded-md mx-1"
            v-for="user in members"
            :key="user._id"
            >{{ user.email }}</span
          >
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
