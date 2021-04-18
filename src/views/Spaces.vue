<template>
  <SmartList :items="spaces">
    <template v-slot:item="{ item }">
      <Space v-bind="item" />
    </template>
  </SmartList>
</template>

<script setup>
import Space from '../components/Space.vue'
import SmartList from '../components/SmartList.vue'
import useSpaces from '../compositions/useSpaces'

const { spaces, add, remove, haveLoaded } = useSpaces()
</script>

<style></style>
