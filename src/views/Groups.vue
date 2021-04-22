<template>
  <SmartList :items="groups">
    <template v-slot:item="{ item }">
      <Group v-bind="item" @remove="remove(item._id)" />
    </template>
  </SmartList>
  <GroupForm @add="add"/>
</template>

<script setup>
import Group from '../components/Group/GroupEntry.vue'
import SmartList from '../components/SmartList.vue'
import GroupForm from '../components/Group/GroupForm.vue'

import useGroups from '../compositions/services/useGroup'

const { add, remove, groups, haveLoaded } = useGroups()

</script>

<style></style>
