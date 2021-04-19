<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script setup>
import Layout from './components/Layout.vue'

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import useDarkmode from './compositions/useDarkmode'

const { dispatch } = useStore()
const { darkModeEnabled } = useDarkmode()

onBeforeMount(() => {
  // dispatch('initializeState')
})
</script>
