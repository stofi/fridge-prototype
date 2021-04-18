<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox
    as="div"
    v-model="modelValue"
    @update:modelValue="select"
    v-slot="{ open }"
  >
    <ListboxLabel
      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ name }}
    </ListboxLabel>
    <div class="mt-1 relative">
      <slot name="selected" />
      <InputElement
        name=" "
        v-model="search"
        @update:modelValue="updateSearch"
      />

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          v-if="open || search.length"
          static
          class="absolute mt-1 w-full bg-gray-200 dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <div
            class="text-gray-600 dark:text-gray-400 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-brand"
            v-if="!items.length"
          >
            Nothing
          </div>
          <ListboxOption
            as="template"
            v-for="item in items"
            :key="item._id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              class="cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-brand"
              :class="
                active
                  ? 'text-white bg-brand dark:text-gray-900'
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
import InputElement from './InputElement.vue'

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
  modelValue: {},
})

defineEmit(['update:modelValue', 'update:searchValue'])

const { emit } = useContext()

const search = ref('')

function updateSearch(value) {
  emit('update:searchValue', value)
}

function select(option) {
  search.value = ''
  emit('update:modelValue', option)
}
</script>
