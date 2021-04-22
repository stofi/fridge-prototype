<template>
  <template v-if="product">
    <teleport to="#teleport-title">: {{ product.name }} </teleport>
    <div>
      {{product.defaultQuantity}} {{product.unit}}
    </div>
  </template>
</template>

<script setup>
import { computed, defineProps } from 'vue'

import useProduct from '../../compositions/services/useProduct'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const { product, getProduct } = useProduct()
getProduct(props.id)
</script>
