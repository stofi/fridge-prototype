<template>
  <div>
    <label :for="id" :class="classes.Label">{{ name }}</label>
    <div class="mt-1 relative">
      <input
        :type="type"
        :name="id"
        :id="id"
        :autocomplete="autocomplete"
        :class="[...classes.Base, slots.error ? classes.InputError : []]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        v-if="slots.error"
        :class="classes.Content"
      >
        <ExclamationCircleIcon
          class="h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>
    <p class="mt-2 text-sm text-red-600" :id="`${id}-error`">
      <slot name="error" />
    </p>
  </div>
</template>
<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import { defineProps, defineEmit, useContext } from 'vue'
import classes from './classes.js'

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
    default: '',
  },
})
const { slots } = useContext()

defineEmit(['update:modelValue'])
</script>
