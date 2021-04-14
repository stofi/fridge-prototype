<template>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div
    class="fixed inset-0 flex z-40 md:hidden"
    role="dialog"
    aria-modal="true"
    :class="active ? '' : 'pointer-events-none'"
  >
    <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        :aria-hidden="!active"
        v-show="active"
      ></div>
    </transition>

    <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
    <transition
      leave-active-class="transition ease-in-out duration-300 transform"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
      enter-active-class="transition ease-in-out duration-300 transform"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
    >
      <div
        v-show="active"
        class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800"
      >
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <transition
          leave-active-class="ease-in-out duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          enter-active-class="ease-in-out duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
        >
          <div v-show="active" class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              @click="$emit('close-sidebar')"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </transition>

        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex-shrink-0 flex items-center px-4">
            <span class="leading-4 text-white font-bold text-2xl tracking-wide">
              kredenc<span class="font-normal">.io</span>
            </span>
          </div>
          <nav class="mt-5 px-2 space-y-1">
            <router-link
              v-for="page in pages"
              :key="page.name"
              :to="page.path"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="
                false
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              "
            >
              <IconStore
                class="mr-4 h-6 w-6"
                :class="
                  false
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300'
                "
                :name="page.icon"
              />
              {{ page.name }}
            </router-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-gray-700 p-4">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=iRefF8fLOk&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-white">Tom Cook</p>
                <p
                  class="text-sm font-medium text-gray-400 group-hover:text-gray-300"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </transition>

    <div class="flex-shrink-0 w-14">
      <!-- Force sidebar to shrink to fit close icon -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<script setup>
import IconStore from '../IconStore.vue'
</script>
