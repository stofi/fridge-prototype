import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Groups from '../views/Groups.vue'
import Group from '../views/Group.vue'
import Inventory from '../views/Inventory.vue'
import Instance from '../views/Instance.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Spaces from '../views/Spaces.vue'
import Space from '../views/Space.vue'
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
        path: '/groups/:id',
        name: 'Group',
        component: Group,
      },
      {
        path: '/products',
        name: 'Products',
        component: Products,
      },
      {
        path: '/products/:id',
        name: 'Product',
        component: Product,
      },
      {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory,
      },
      {
        path: '/inventory/:id',
        name: 'Instance',
        component: Instance,
      },
      {
        path: '/spaces',
        name: 'Spaces',
        component: Spaces,
      },
      {
        path: '/spaces/:id',
        name: 'Space',
        component: Space,
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
