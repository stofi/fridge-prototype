<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
      name
    }}</label>
    <div class="mt-1 relative">
      <input
        :type="type"
        :name="id"
        :id="id"
        :autocomplete="autocomplete"
        class="shadow-sm block w-full sm:text-sm rounded-md placeholder-gray-800 dark:placeholder-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 ring-offset-2 dark:border-gray-800"
        :class="
          slots.error
            ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500 dark:border-red-700'
            : 'focus:ring-brand focus:border-brand border-gray-300 dark:border-gray-700'
        "
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        v-if="slots.error"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <ExclamationCircleIcon
          class="h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>
    <p class="mt-2 text-sm text-red-600" id="email-error">
      <slot name="error" />
    </p>
  </div>
</template>
<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import { defineProps, defineEmit, useContext } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'input',
  },
  id: {
    type: String,
    default: 'input',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
  },
  autocomplete: {
    type: String,
    default: ''
  }
})
const { slots } = useContext()

defineEmit(['update:modelValue'])
</script>
