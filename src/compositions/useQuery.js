import { computed, ref, watch, reactive } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function ({ model }) {
  const query = reactive({})
  const queryWhen = ref(false)
  const queryParams = computed(() => ({
    query: query.value,
  }))
  const { items: queryItems, haveLoaded: queryLoaded } = useFind({
    model,
    params: queryParams,
    queryWhen,
  })

  function setQuery(value) {
    query.value = value
  }
  watch(
    query,
    (curr, prev) => {
      if (queryWhen.value) return
      if (curr != prev) {
        queryWhen.value = true
        setTimeout(() => {
          queryWhen.value = false
        }, 500)
      }
    },
    {
      immediate: true,
    }
  )
  return {
    queryItems,
    queryLoaded,
    setQuery,
  }
}
