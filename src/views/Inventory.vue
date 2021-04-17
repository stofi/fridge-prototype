<template>
  <div>
    <div v-for="instance in instances" :key="instance._id">{{ instance.name }}</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

import useAsyncComputed from '../compositions/useAsyncComputed'

const { dispatch } = useStore()

const [instances] = useAsyncComputed(
  async () => await dispatch('instances/find').then(({ data }) => data)
)
</script>

<style></style>
