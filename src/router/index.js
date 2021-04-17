import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Groups from '../views/Groups.vue'
import Inventory from '../views/Inventory.vue'
import Products from '../views/Products.vue'
import Spaces from '../views/Spaces.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
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
  ]
})

export default router