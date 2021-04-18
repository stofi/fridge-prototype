<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200 dark:divide-black">
      <li v-for="item in items" :key="item.id">
        <slot name="item" v-bind="{ item }">
          <pre>{{ item }}</pre>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
