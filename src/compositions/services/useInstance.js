import { inject } from 'vue'
import useService from '../useService'

export default function () {
  const feathers = inject('feathers')
  const { Instance } = feathers.apiVuex.models.api
  const {
    add,
    remove,
    item: instance,
    items: instances,
    getItem: getInstance,
    haveLoaded,
    searchLoaded,
    searchItems: searchInstances,
    updateSearch: updateInstanceSearch,
    queryItems: queryInstances,
    setQuery: setInstanceQuery,
  } = useService({
    model: Instance,
    name: 'instances',
  })

  return {
    add,
    remove,
    instances,
    instance,
    getInstance,
    haveLoaded,
    searchLoaded,
    searchInstances,
    updateInstanceSearch,
    queryInstances,
    setInstanceQuery,
  }
}
