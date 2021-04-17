import { reactive } from 'vue'

const usePages = () => {
  const pages = reactive([
    {
      name: 'Dashboard',
      path: '/',
      icon: 'Cake',
    },
    {
      name: 'Groups',
      path: '/groups',
      icon: 'Groups',
    },
    {
      name: 'Products',
      path: '/products',
      icon: 'Tag',
    },
    {
      name: 'Inventory',
      path: '/inventory',
      icon: 'Database',
    },
    {
      name: 'Spaces',
      path: '/spaces',
      icon: 'Database',
    },
  ])
  return {
    pages,
  }
}

export default usePages
