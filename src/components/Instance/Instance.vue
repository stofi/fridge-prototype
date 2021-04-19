<template>
  <ListItem @remove="$emit('remove')">
    <template #default>
        <div class="">
          <p class="text-sm font-bold text-brand truncate">
            {{ product.name }}
          </p>
          <p class="text-sm ">{{ space.name }}</p>
          <p class="text-sm text-gray-500">
            {{ quantity }}
            {{ product.unit }}
          </p>
        </div>
        <div class="">
          <p class="text-sm text-gray-500">
            {{ purchaseDate }}
          </p>
          <p class="text-sm text-gray-500">
            {{ untilDate }}
          </p>
        </div>
    </template>
  </ListItem>
</template>

<script setup>
import ListItem from '../ListItem.vue'
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
