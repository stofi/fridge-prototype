<template>
  <Instance :id="route.params.id" />
</template>

<script setup>
import Instance from '../components/Instance/Instance.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
