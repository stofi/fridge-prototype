<template>
  <ListItem @remove="$emit('remove')">
    <template #default>
      <router-link :to="`/products/${_id}`" class="text-sm font-medium text-brand truncate">
        {{ name }}
      </router-link>
      <p class="flex items-center text-sm text-gray-500">
        {{ defaultQuantity }}
        {{ unit }}
      </p>
    </template>
  </ListItem>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'
import ListItem from '../ListItem.vue'

const props = defineProps({
  _id: {
    type: String,
    required: true
  },
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
