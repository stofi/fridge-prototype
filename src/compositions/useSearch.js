import { computed, ref, watch } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function ({ model, searchField = 'name' }) {
  const search = ref('')
  const queryWhen = ref(false)
  const params = computed(() => ({
    query: {
      [searchField]: {
        $regex: search.value,
        $options: 'i',
      },
    },
  }))
  const { items: searchItems, haveLoaded: searchLoaded } = useFind({
    model,
    params,
    queryWhen,
  })
  function updateSearch(value) {
    search.value = value
  }
  watch(search, (curr, prev) => {
    if (queryWhen.value) return
    if (curr != prev) {
      queryWhen.value = true
      setTimeout(() => {
        queryWhen.value = false
      }, 500)
    }
  })

  return {
    searchLoaded,
    searchItems,
    updateSearch,
  }
}
