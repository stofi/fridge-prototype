<template>
  <Disclosure
    as="nav"
    class="bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <span class="font-bold text-2xl text-brand">
              Kredenc<span class="font-normal">.io </span>
            </span>
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              v-for="item in pages"
              :key="item.name"
              :to="item.path"
              :class="[
                item.current
                  ? 'border-brand text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <Toggle
            class="mr-2"
            :enabled="darkModeEnabled"
            @update:enabled="setDarkmode"
          />

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="max-w-xs bg-white dark:bg-gray-900 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 dark:focus:ring-offset-2 ring-offset-black focus:ring-brand text-brand"
              >
                <span class="sr-only">Open user menu</span>
                <CogIcon
                  class="block h-6 w-6 stroke-current"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem
                  v-for="item in userNavigation"
                  :key="item.name"
                  v-slot="{ active }"
                >
                  <button
                    @click="handle(item.action)"
                    class="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    :class="active ? 'bg-gray-100 dark:bg-gray-700' : ''"
                  >
                    {{ item.name }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand dark:bg-gray-900 dark:ring-offset-black"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in pages"
          :key="item.name"
          :to="item.path"
          :class="[
            item.current
              ? 'bg-brand border-brand text-brand'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300',
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:hover:bg-gray-700 ',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-800">
        <div class="flex items-center px-4">
          <div class="ml-3">
            <div
              v-if="user"
              class="text-sm font-medium text-gray-500 dark:text-gray-300"
            >
              {{ user.email }}
            </div>
          </div>
          <Toggle
            class="ml-auto"
            :enabled="darkModeEnabled"
            @update:enabled="setDarkmode"
          />
        </div>
        <div class="mt-3 space-y-1">
          <button
            v-for="item in userNavigation"
            :key="item.name"
            @click="handle(item.action)"
            class="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, CogIcon } from '@heroicons/vue/outline'
import Toggle from './Toggle.vue'
import useUser from '../compositions/useUser'
import usePages from '../compositions/usePages'
import useDarkmode from '../compositions/useDarkmode'
import { useRouter, useRoute } from 'vue-router'

const userNavigation = ref([
  { name: 'Settings', action: 'settings' },
  { name: 'Sign out', action: 'logout' },
])

const open = ref(false)

const { user, logout } = useUser()
const router = useRouter()
const route = useRoute()
const { pages } = usePages()
const { darkModeEnabled, setDarkmode } = useDarkmode()

function handle(action) {
  if (action === 'settings') {
    router.push({ name: 'Settings' })
  } else if (action === 'logout') {
    logout()
  }
}
</script>

<style></style>
