import { inject, computed } from 'vue'
import useService from './useService'

export default function () {
  const feathers = inject('feathers')
  const { User } = feathers.apiVuex.models.api

  const {
    items: users,
    haveLoaded,
    searchLoaded,
    searchItems: searchUsers,
    updateSearch: updateUserSearch,
  } = useService({
    model: User,
    name: 'users',
    searchField: 'email',
  })

  return {
    users,
    haveLoaded,
    searchLoaded,
    searchUsers,
    updateUserSearch,
  }
}
