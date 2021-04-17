<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Layout from './components/Layout.vue'

const target = ref(null)
const { state } = useStore()
const authState = computed(() => state.auth)
</script>
