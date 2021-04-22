<template>
  <template v-if="instance">
    <div>
      {{instance.quantity}} {{instance.product.unit}}
      <div>{{instance.space.name}}</div>
      <div>
        Default: <Product :id="instance.product._id" />
      </div>
    </div>
  </template>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import Product from '../Product/Product.vue'

import useInstance from '../../compositions/services/useInstance'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const { instance, getInstance } = useInstance()
getInstance(props.id)
</script>
