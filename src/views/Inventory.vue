<template>
  <SmartList :items="instances">
    <template v-slot:item="{ item }">
      <Instance v-bind="item" />
    </template>
  </SmartList>
</template>

<script setup>
import { useStore } from 'vuex'
import SmartList from '../components/SmartList.vue'
import Instance from '../components/Instance.vue'
import useInstances from '../compositions/useInstances'

const { instances, add, remove, haveLoaded } = useInstances()
</script>

<style></style>
