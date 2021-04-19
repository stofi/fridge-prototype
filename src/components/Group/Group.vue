<template>
  <ListItem @remove="$emit('remove')">
    <template #default>
      <div class="grid grid-cols-1 md:grid-cols-11 w-full">
        <p class="col-span-3 text-sm font-bold text-brand truncate mb-2 sm:mb-0">
          {{ groupName }}
        </p>
        <p class="col-span-8 flex items-center text-sm text-gray-500 mb-2 sm:mb-0">
          <UsersIcon
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span
            class="bg-gray-100 dark:bg-gray-900 px-2 rounded-md mx-1"
            v-for="user in members"
            :key="user._id"
            >{{ user.username }}</span
          >
        </p>
      </div>
    </template>
  </ListItem>
</template>

<script setup>
import ListItem from '../ListItem.vue'
import { UsersIcon } from '@heroicons/vue/solid'
import { defineProps, computed } from 'vue'
import useUser from '../../compositions/useUser'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  owner: {
    type: Object,
  },
  default: {
    type: Boolean,
    default: false,
  },
  members: {
    type: Array,
    default: () => [],
  },
})

const { user } = useUser()


const groupName = computed(() =>
  props.default
    ? props.owner._id === user.value._id
      ? 'Mine'
      : `${props.owner.username}'s`
    : props.name
)
</script>

<style></style>
