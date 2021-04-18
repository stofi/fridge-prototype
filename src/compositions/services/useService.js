import { useStore } from 'vuex'
import { computed, inject, ref } from 'vue'
import { useFind } from '@feathersjs/vuex'

export default function ({ model, name, searchField = 'name' }) {
  const { dispatch } = useStore()
  const feathers = inject('feathers')
  const search = ref('')
  const searchParams = computed(() => ({
    query: {
      [searchField]: {
        $regex: search.value,
        $options: 'i',
      },
    },
  }))
  const { items, haveLoaded } = useFind({
    model,
    params: {
      query: {},
    },
  })
  const { items: searchItems, haveLoaded: searchLoaded } = useFind({
    model,
    params: searchParams,
  })

  function add(item) {
    console.log(item);
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

  function updateSearch(value) {
    search.value = value
  }

  return {
    add,
    remove,
    items,
    haveLoaded,
    searchLoaded,
    searchItems,
    updateSearch,
  }
}
