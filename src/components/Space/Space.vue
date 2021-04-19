<template>
  <ListItem @remove="$emit('remove')">
    <template #default>
      <div class="">
        <p class="text-sm font-bold text-brand truncate">
          {{ name }}
        </p>
        <p class="text-sm truncate">
          {{ group.name }}
        </p>
      </div>
    </template>
  </ListItem>
</template>

<script setup>
import ListItem from '../ListItem.vue'

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
