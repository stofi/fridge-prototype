<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="modelValue" @update:modelValue="select">
    <ListboxLabel as="template">
      <label :class="classes.Label">
        {{ name }}
      </label>
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton :class="classes.Base">
        <span class="block truncate">{{ modelValue.name }}</span>
        <span :class="classes.Content">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions :class="classes.Options">
          <ListboxOption
            as="template"
            v-for="item in items"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                ...classes.Option,
                ...(active ? classes.OptionActive : classes.OptionNonActive),
              ]"
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
                :class="[
                  ...classes.CheckIcon,
                  ...(active
                    ? classes.CheckIconActive
                    : classes.CheckIconNonActive),
                ]"
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

import classes from './classes.js'

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
