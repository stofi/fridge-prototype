import { createStore, createLogger } from 'vuex'
import { users } from './services/users'
import { instances } from './services/instances'
import { products } from './services/products'
import { groups } from './services/groups'
import { spaces } from './services/spaces'

export function setupStore({ feathers }) {
  const store = createStore({
    state() {
      return {}
    },
    mutations: {},
    actions: {
      initializeState({ state }) {
        if (localStorage.getItem('state')) {
          this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('state')))
          )
        }
      },
    },
    getters: {},
    modules: {},
    plugins: [
      createLogger(),
      users({ feathers }),
      groups({ feathers }),
      instances({ feathers }),
      products({ feathers }),
      spaces({ feathers }),
      feathers.apiVuex.makeAuthPlugin({ userService: 'users' }),
    ],
  })

  store.subscribe((mutation, state) => {
    if (state) {
      localStorage.setItem('state', JSON.stringify(state))
    }
  })

  return store
}
