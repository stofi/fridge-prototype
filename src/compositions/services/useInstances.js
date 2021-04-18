import { inject } from 'vue'
import useService from './useService'

export default function () {
  const feathers = inject('feathers')
  const { Instance } = feathers.apiVuex.models.api
  const {
    add,
    remove,
    items: instances,
    haveLoaded,
    searchLoaded,
    searchItems: searchInstances,
    updateSearch: updateInstanceSearch,
  } = useService({
    model: Instance,
    name: 'instances',
  })

  return {
    add,
    remove,
    instances,
    haveLoaded,
    searchLoaded,
    searchInstances,
    updateInstanceSearch,
  }
}
