<template>
  <Group :id="route.params.id" />
</template>

<script setup>
import Group from '../components/Group/Group.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
