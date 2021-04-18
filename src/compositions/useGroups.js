import { useStore } from 'vuex'
import { computed, inject } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function () {
  const { dispatch } = useStore()
  const feathers = inject('feathers')

  const { Group } = feathers.apiVuex.models.api

  const { items: groups, haveLoaded } = useFind({
    model: Group,
    params: {
      query: {},
    },
  })

  function add(group) {
    let newGroup = Group.instanceDefaults()
    newGroup = {
      ...newGroup,
      ...group,
    }
    dispatch('groups/create', newGroup)
  }

  function remove(id) {
    dispatch('groups/remove', id)
  }
  return { add, remove, groups, haveLoaded }
}
