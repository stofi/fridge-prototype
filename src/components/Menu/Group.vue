<template>
  <MenuMobile :pages="pages" :active="active" @close-sidebar="deactivate" />
  <MenuDesktop :pages="pages"/>
  <Teleport v-if="target" :to="target">
    <button
      @click="activate"
      class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span class="sr-only">Open sidebar</span>
      <!-- Heroicon name: outline/menu -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </Teleport>
</template>

<script>
export default {
  name: 'MenuGroup',
  props: ['target'],
}
</script>

<script setup="name">
import { ref } from 'vue'

import MenuMobile from './Mobile.vue'
import MenuDesktop from './Desktop.vue'
import usePages from '../../compositions/usePages'

const { pages } = usePages()

const active = ref(false)

const activate = () => {
  active.value = true
}
const deactivate = () => {
  active.value = false
}
const toggle = () => {
  active.value = !active.value
}
</script>
