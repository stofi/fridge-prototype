import { inject, computed } from 'vue'
import useService from '../useService'

export default function () {
  const feathers = inject('feathers')
  const { User } = feathers.apiVuex.models.api

  const {
    items: users,
    item: user,
    getItem: getUser,
    haveLoaded,
    searchLoaded,
    searchItems: searchUsers,
    updateSearch: updateUserSearch,
  } = useService({
    model: User,
    name: 'users',
    searchField: 'username',
  })

  return {
    users,
    user,
    getUser,
    haveLoaded,
    searchLoaded,
    searchUsers,
    updateUserSearch,
  }
}
