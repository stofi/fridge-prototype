import { computed, ref } from 'vue'
import { useGet } from '@feathersjs/vuex'

export default function ({ model }) {
  const id = ref(null)
  const { item, haveLoaded: queryLoaded } = useGet({
    model,
    id,
  })

  function get(newid) {
    id.value = newid
  }

  return {
    getItem: get,
    item,
    queryLoaded,
  }
}
