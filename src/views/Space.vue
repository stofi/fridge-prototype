<template>
  <Space :id="route.params.id" />
</template>

<script setup>
import Space from '../components/Space/Space.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
