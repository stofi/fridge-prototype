import { useStore } from 'vuex'
import { computed, inject } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function () {
  const { dispatch } = useStore()
  const feathers = inject('feathers')

  const { Space } = feathers.apiVuex.models.api

  const { items: spaces, haveLoaded } = useFind({
    model: Space,
    params: {
      query: {},
    },
  })

  function add(space) {
    let newSpace = Space.spacesDefaults()
    newSpace = {
      ...newSpace,
      ...space,
    }
    dispatch('spaces/create', newSpace)
  }

  function remove(id) {
    dispatch('spaces/remove', id)
  }
  return { add, remove, spaces, haveLoaded }
}
