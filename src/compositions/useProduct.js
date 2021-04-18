import { useStore } from 'vuex'
import { computed, inject } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function () {
  const { dispatch } = useStore()
  const feathers = inject('feathers')

  const { Product } = feathers.apiVuex.models.api

  const { items: products, haveLoaded } = useFind({
    model: Product,
    params: {
      query: {},
    },
  })

  function add(product) {
    let newProduct = Product.instanceDefaults()
    newProduct = {
      ...newProduct,
      ...product,
    }
    dispatch('products/create', newProduct)
  }

  function remove(id) {
    dispatch('products/remove', id)
  }
  return { add, remove, products, haveLoaded }
}
