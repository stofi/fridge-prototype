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
    actions: {},
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
  return store
}
