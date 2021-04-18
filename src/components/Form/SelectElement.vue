<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="modelValue" @update:modelValue="select">
    <ListboxLabel
      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ name }}
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="bg-white dark:bg-gray-800 relative w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand sm:text-sm"
      >
        <span class="block truncate">{{ modelValue.name }}</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 w-full bg-gray-200 dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="item in items"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              class="cursor-default select-none relative py-2 pl-3 pr-9"
              :class="
                active
                  ? 'text-white bg-brand'
                  : 'text-gray-900 dark:text-gray-300'
              "
            >
              <slot name="itemLabel" :item="item">
                <span
                  class="block truncate"
                  :class="selected ? 'font-semibold' : 'font-normal'"
                >
                  {{ item.name }}
                </span>
              </slot>

              <span
                v-if="selected"
                class="absolute inset-y-0 right-0 flex items-center pr-4"
                :class="active ? 'text-white dark:text-gray-200' : 'text-brand'"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref, defineProps, computed, defineEmit, useContext } from 'vue'

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    validator(value) {
      return !!value.length
    },
  },
  modelValue: {
    type: Object,
  },
})

defineEmit(['update:modelValue'])

const { emit } = useContext()

function select(option) {
  emit('update:modelValue', option)
}
</script>
