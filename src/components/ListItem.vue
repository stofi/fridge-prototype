<template>
  <div
    class="grid grid-cols-1 md:grid-cols-12 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-4 sm:px-6"
  >
    <div class="col-span-11 flex items-center justify-between pt-2 sm:pt-0">
      <slot />
    </div>
    <div class="col-span-1 mb-2 sm:mb-0 flex justify-end">
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
import { TrashIcon } from '@heroicons/vue/solid'
</script>
