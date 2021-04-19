import { computed } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function ({ model, query }) {
  const queryParams = computed(() => (!query ? { query: {} } : query.value))
  const { items: queryItems, haveLoaded: queryLoaded } = useFind({
    model,
    params: queryParams,
  })

  return {
    queryItems,
    queryLoaded,
  }
}
