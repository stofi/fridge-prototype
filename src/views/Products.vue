<template>
  <SmartList :items="products">
    <template v-slot:item="{ item }">
      <ProductComponent v-bind="item" @remove="remove(item._id)" />
    </template>
  </SmartList>
  <ProductForm @add="add" />
</template>

<script setup>
import ProductComponent from '../components/Product/ProductEntry.vue'
import ProductForm from '../components/Product/ProductForm.vue'
import SmartList from '../components/SmartList.vue'
import useProduct from '../compositions/services/useProduct'

const { add, remove, products, haveLoaded } = useProduct()
</script>

<style></style>
