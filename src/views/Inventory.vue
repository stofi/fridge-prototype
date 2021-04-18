<template>
  <SmartList :items="instances">
    <template v-slot:item="{ item }">
      <Instance v-bind="item" @remove="remove(item._id)" />
    </template>
  </SmartList>
  <InstanceForm @add="add"/>
</template>

<script setup>
import SmartList from '../components/SmartList.vue'
import Instance from '../components/Instance/Instance.vue'
import InstanceForm from '../components/Instance/InstanceForm.vue'
import useInstances from '../compositions/services/useInstances'

const { instances, add, remove, haveLoaded } = useInstances()

</script>

<style></style>
