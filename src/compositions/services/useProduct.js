import { inject } from 'vue'
import useService from '../useService'

export default function () {
  const feathers = inject('feathers')
  const { Product } = feathers.apiVuex.models.api
  const {
    add,
    remove,
    items: products,
    haveLoaded,
    searchLoaded,
    searchItems: searchProducts,
    updateSearch: updateProductSearch,
  } = useService({
    model: Product,
    name: 'products',
  })

  return {
    add,
    remove,
    products,
    haveLoaded,
    searchLoaded,
    searchProducts,
    updateProductSearch,
  }
}
