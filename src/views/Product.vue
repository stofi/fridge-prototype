<template>
  <Product :id="route.params.id" />
</template>

<script setup>
import Product from '../components/Product/Product.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
