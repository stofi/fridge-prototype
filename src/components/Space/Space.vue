<template>
  <template v-if="space">
    <div
      class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mt-4"
    >
      <div class="px-4 py-5 sm:px-6">
        <h3
          class="text-lg sm:text-2xl leading-6 font-bold text-gray-900 dark:text-gray-100"
        >
          {{ space.name }}
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
                {{ space.group.owner }}
              </span>
            </dd>
          </div>

          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Instances
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">
              <ul
                class="border border-gray-200 dark:border-gray-900 rounded-md divide-y divide-gray-200 dark:divide-gray-900"
              >
                <li
                  v-for="instance in queryInstances"
                  :key="instance._id"
                  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                >
                  <router-link
                    :to="`/inventory/${instance._id}`"
                    class="ml-2 flex-1 w-0 truncate text-brand font-bold"
                  >
                    {{ instance.product.name }}
                    {{ instance.quantity }}
                    {{ instance.product.unit }}
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

import useSpace from '../../compositions/services/useSpace'
import useInstance from '../../compositions/services/useInstance'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const { space, getSpace } = useSpace()
const { queryInstances, setInstanceQuery } = useInstance()
getSpace(props.id)
setInstanceQuery({
  'space._id': props.id,
})
</script>
