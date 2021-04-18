<template>
  <SmartList :items="groups">
    <template v-slot:item="{ item }">
      <Group v-bind="item" />
    </template>
  </SmartList>
</template>

<script setup>
import Group from '../components/Group.vue'
import SmartList from '../components/SmartList.vue'

import useGroups from '../compositions/useGroups'

const { add, remove, groups, haveLoaded } = useGroups()

</script>

<style></style>
