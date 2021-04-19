<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul class="divide-y divide-gray-200">
    <li v-for="user in users" :key="user.username" class="py-4 flex">
      <!-- <img class="h-10 w-10 rounded-full" :src="user.image" alt="" /> -->
      <div class="ml-3">
        <!-- <p class="text-sm font-medium text-gray-900">{{ user.name }}</p> -->
        <p class="text-sm text-gray-500 dark:text-gray-300">{{ user.username }}</p>
      </div>
      <button
        @click="$emit('remove', user._id)"
        class="ml-auto inline-flex items-center text-gray-500 focus:outline-none focus:text-red-500 mr-3"
      >
        <TrashIcon class="block h-4 w-4 fill-current" aria-hidden="true" />
      </button>
    </li>
  </ul>
</template>

<script setup>
import {
  TrashIcon,
} from '@heroicons/vue/solid'
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  users: {
    type: Array,
    default: () => [],
  },
})
defineEmit(['remove'])
</script>
