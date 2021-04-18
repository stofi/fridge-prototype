<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div
      class="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10"
    >
      <form class="space-y-6" @submit.prevent="handleLogin">
        <InputElement
          v-model="email"
          name="Email"
          type="email"
          autocomplete="email"
        />
        <InputElement
          v-model="password"
          name="Password"
          type="password"
          autocomplete="password"
        />

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand hover:bg-brand dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand dark:ring-offset-black"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputElement from './Form/InputElement.vue'
import useUser from '../compositions/useUser'
const password = ref('')
const email = ref('')
const { login } = useUser()
function handleLogin() {
  login(email.value, password.value)
}
</script>
