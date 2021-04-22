<template>
  <ListItem @remove="$emit('remove')">
    <template #default>
      <div class="">
        <router-link
          :to="`/inventory/${_id}`"
          class="text-sm font-bold text-brand truncate"
        >
          {{ product.name }}
        </router-link>
        <p class="text-sm">{{ spaceName }}</p>
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
import { defineProps, computed } from 'vue'
import ButtonAdd from '../Button/ButtonAdd.vue'
import useUserService from '../../compositions/services/useUserService'
import useUser from '../../compositions/useUser'

const props = defineProps({
  _id: {
    type: String,
    required: true,
  },
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

const { getUser, user: owner } = useUserService()
const { user } = useUser()

const spaceName = computed(() =>
  props.space.default
    ? owner._id === user._id
      ? 'Mine uncategorized'
      : `${owner.username}'s uncategorized`
    : props.space.name
)
</script>

<style></style>
