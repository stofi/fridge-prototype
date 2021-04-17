<template>
  <div>
    <div v-for="space in spaces" :key="space._id">
      <Space :space="space" />
    </div>
  </div>
</template>

<script setup>
import Space from '../components/Space.vue'
import { useStore } from 'vuex'

import useAsyncComputed from '../compositions/useAsyncComputed'

const { dispatch } = useStore()

const [spaces] = useAsyncComputed(
  async () => await dispatch('spaces/find').then(({ data }) => data)
)
</script>

<style></style>
