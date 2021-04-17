<template>
  <div>
    <div v-for="product in products" :key="product._id">
      <ProductComponent :product="product" />
    </div>
  </div>
  <form>
    <input type="text" v-model="name" />
  </form>
  <button @click="add">add</button>
</template>

<script setup>
import ProductComponent from '../components/Product.vue'
import { useStore } from 'vuex'
import { inject, ref } from 'vue'

import useAsyncComputed from '../compositions/useAsyncComputed'

const { dispatch } = useStore()
const feathers = inject('feathers')

const { Product } = feathers.apiVuex.models.api

const [products] = useAsyncComputed(
  async () => await dispatch('products/find').then(({ data }) => data)
)

const name = ref('')

function add() {
  const newProduct = Product.instanceDefaults()
  newProduct.name = name.value
  dispatch('products/create', newProduct)
}
</script>

<style></style>
