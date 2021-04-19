import { useStore } from 'vuex'
import { computed, inject, ref, watch } from 'vue'
import { useFind } from '@feathersjs/vuex'
import useSearch from './useSearch'
import useQuery from './useQuery'

export default function ({ model, name, searchField = 'name', query }) {
  const { dispatch } = useStore()
  const feathers = inject('feathers')
  const { searchLoaded, searchItems, updateSearch } = useSearch({
    model,
    searchField,
  })
  const { queryItems, queryLoaded } = useQuery({
    model,
    query,
  })

  const { items, haveLoaded } = useFind({
    model,
    params: {
      query: {},
    },
  })
  

  function add(item) {
    console.log(item)
    let newItem = model.instanceDefaults()
    newItem = {
      ...newItem,
      ...item,
    }
    dispatch(`${name}/create`, newItem)
  }

  function remove(id) {
    dispatch(`${name}/remove`, id)
  }

  return {
    add,
    remove,
    items,
    haveLoaded,
    searchLoaded,
    searchItems,
    updateSearch,
    queryItems,
    queryLoaded,
  }
}
