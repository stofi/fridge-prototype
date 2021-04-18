import { useStore } from 'vuex'
import { computed, inject } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function () {
  const { dispatch } = useStore()
  const feathers = inject('feathers')

  const { Instance } = feathers.apiVuex.models.api

  const { items: instances, haveLoaded } = useFind({
    model: Instance,
    params: {
      query: {},
    },
  })

  function add(instace) {
    let newInstance = Instance.instancesDefaults()
    newInstance = {
      ...newInstance,
      ...instace,
    }
    dispatch('instances/create', newInstance)
  }

  function remove(id) {
    dispatch('instances/remove', id)
  }
  return { add, remove, instances, haveLoaded }
}
