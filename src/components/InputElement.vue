<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{
      name
    }}</label>
    <div class="mt-1 relative">
      <input
        :type="type"
        :name="id"
        :id="id"
        class="shadow-sm block w-full sm:text-sm rounded-md"
        :class="
          slots.error
            ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
            : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
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
    default: 'input',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
  },
})
const { slots } = useContext()

defineEmit(['update:modelValue'])
</script>
