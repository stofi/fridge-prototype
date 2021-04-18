import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Groups from '../views/Groups.vue'
import Inventory from '../views/Inventory.vue'
import Products from '../views/Products.vue'
import Spaces from '../views/Spaces.vue'
import Settings from '../views/Settings.vue'

const configureRouter = (app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/groups',
        name: 'Groups',
        component: Groups,
      },
      {
        path: '/products',
        name: 'Products',
        component: Products,
      },
      {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory,
      },
      {
        path: '/spaces',
        name: 'Spaces',
        component: Spaces,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
      },
    ],
  })

  router.beforeEach(async (to, from, next) => {
    const accessToken = app.apiClient.authentication.options.storage.getItem(
      'feathers-jwt'
    )
    if (!!accessToken) {
      await app.apiClient.reAuthenticate().catch(console.log)
    }
    const isAuthenticated = app.apiClient.authentication.authenticated
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
  })
  return router
}

export default configureRouter
