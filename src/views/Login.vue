<template>
  <Login />
</template>
<script setup>
import Login from '../components/Login.vue'

import { onBeforeMount, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../compositions/useUser'

const router = useRouter()

const { user } = useUser()

watchEffect(() => {
  if (!user.value) return
  router.push({ name: 'Dashboard' })
})
</script>

<style></style>
