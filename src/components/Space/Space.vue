<template>
  <ListItem @remove="$emit('remove')">
    <template #default>
      <div class="">
        <p class="text-sm font-bold text-brand truncate">
          {{ spaceName }}
        </p>
        <p class="text-sm truncate">
          {{ groupName }}
        </p>
      </div>
    </template>
  </ListItem>
</template>

<script setup>
import ListItem from '../ListItem.vue'

import { defineProps, watchEffect, computed } from 'vue'
import useUserService from '../../compositions/services/useUserService'
import useUser from '../../compositions/useUser'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  default: {
    type: Boolean,
    default: false
  },
  group: {
    type: Object,
    default: () => ({
      name: '',
      members: [],
    }),
  },
})

const { getUser, user: owner } = useUserService()
const { user } = useUser()

watchEffect(() => {
  getUser(props.group.owner)
})

const spaceName = computed(() =>
  props.default
    ? 'Uncategorized'
    : props.name
)

const groupName = computed(() =>
  props.group.default
    ? owner._id === user._id
      ? 'Mine'
      : `${owner.username}'s`
    : props.group.name
)
</script>

<style></style>
