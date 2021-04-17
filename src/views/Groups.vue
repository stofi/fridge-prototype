<template>
  <div>
    <div v-for="group in groups" :key="group._id">
      <Group :group="group" />

    </div>
  </div>
</template>

<script setup>
import Group from '../components/Group.vue'
import { useStore } from 'vuex'

import useAsyncComputed from '../compositions/useAsyncComputed'

const { dispatch } = useStore()

const [groups] = useAsyncComputed(
  async () => await dispatch('groups/find').then(({ data }) => data)
)
</script>

<style></style>
