import { inject } from 'vue'
import useService from '../useService'

export default function () {
  const feathers = inject('feathers')
  const { Group } = feathers.apiVuex.models.api
  const {
    add,
    remove,
    items: groups,
    item: group,
    getItem: getGroup,
    haveLoaded,
    searchLoaded,
    searchItems: searchGroups,
    updateSearch: updateGroupSearch,
  } = useService({
    model: Group,
    name: 'groups',
  })

  return {
    group,
    getGroup,
    add,
    remove,
    groups,
    haveLoaded,
    searchLoaded,
    searchGroups,
    updateGroupSearch,
  }
}
