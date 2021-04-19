import { inject } from 'vue'
import useService from '../useService'

export default function () {
  const feathers = inject('feathers')
  const { Space } = feathers.apiVuex.models.api
  const {
    add,
    remove,
    item: space,
    getItem: getSpace,
    items: spaces,
    haveLoaded,
    searchLoaded,
    searchItems: searchSpaces,
    updateSearch: updateSpaceSearch,
  } = useService({
    model: Space,
    name: 'spaces',
  })

  return {
    add,
    space,
    getSpace,
    remove,
    spaces,
    haveLoaded,
    searchLoaded,
    searchSpaces,
    updateSpaceSearch,
  }
}
