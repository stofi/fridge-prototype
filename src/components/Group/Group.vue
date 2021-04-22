<template>
  <template v-if="group">
    <div
      class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mt-4"
    >
      <div class="px-4 py-5 sm:px-6">
        <h3
          class="text-lg sm:text-2xl leading-6 font-bold text-gray-900 dark:text-gray-100"
        >
          {{ group.name }}
        </h3>
      </div>
      <div
        class="border-t border-gray-200 dark:border-gray-900 px-4 py-5 sm:px-6"
      >
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Owner
            </dt>
            <dd class="mt-1 text-sm text-gray-500">
              <span class="font-bold text-brand">
                {{ group.owner.username }}
              </span>
            </dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Members
            </dt>
            <dd class="mt-1 text-sm text-gray-500">
              <ul>
                <li
                  v-for="member in group.members"
                  :key="member._id"
                  class="bg-gray-100 dark:bg-gray-900 px-2 rounded-md mx-1 inline-block"
                >
                  {{ member.username }}
                </li>
              </ul>
            </dd>
          </div>

          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Spaces
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">
              <ul
                class="border border-gray-200 dark:border-gray-900 rounded-md divide-y divide-gray-200 dark:divide-gray-900"
              >
                <li
                  v-for="space in querySpaces"
                  :key="space._id"
                  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                >
                  <router-link
                    :to="`/spaces/${space._id}`"
                    class="ml-2 flex-1 w-0 truncate text-brand font-bold"
                  >
                    {{ space.name }}
                  </router-link>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </template>
</template>

<script setup>
import { computed, defineProps, reactive, inject } from 'vue'

import useGroup from '../../compositions/services/useGroup'
import useSpace from '../../compositions/services/useSpace'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const { group, getGroup } = useGroup()
const { querySpaces, setSpaceQuery } = useSpace()
getGroup(props.id)
setSpaceQuery({
  'group._id': props.id,
})
</script>
