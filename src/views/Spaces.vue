<template>
  <SmartList :items="spaces">
    <template v-slot:item="{ item }">
      <Space v-bind="item" @remove="remove(item._id)" />
    </template>
  </SmartList>
  <SpaceForm @add="add" />
</template>

<script setup>
import Space from '../components/Space/SpaceEntry.vue'
import SpaceForm from '../components/Space/SpaceForm.vue'
import SmartList from '../components/SmartList.vue'
import useSpaces from '../compositions/services/useSpace'

const { spaces, add, remove, haveLoaded } = useSpaces()
</script>

<style></style>
