<template>
  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col h-0 flex-1 bg-gray-800">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <span class="leading-8 text-white font-bold text-3xl tracking-wide">
              kredenc<span class="font-normal">.io</span>
            </span>
          </div>
          <nav class="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
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
                class="mr-3 h-6 w-6"
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
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=iRefF8fLOk&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">Tom Cook</p>
                <p
                  class="text-xs font-medium text-gray-300 group-hover:text-gray-200"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuDesktop',
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<script setup>
import IconStore from '../IconStore.vue'
</script>

<style></style>
