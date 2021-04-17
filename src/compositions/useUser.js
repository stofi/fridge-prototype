import { computed, inject } from 'vue'
import { useStore } from 'vuex'


export default function () {
  const { state, dispatch } = useStore()
  const authState = computed(() => state.auth)
  const user = computed(() => authState?.value?.payload?.user || null)

  // const feathers = inject('feathers')
  // feathers.apiClient.reAuthenticate().catch(() => {})
  dispatch('auth/authenticate')  

  function logout() {
    dispatch('auth/logout')
  }
  function login(email, password) {
    this.$store.dispatch('auth/authenticate', {
      email,
      password,
      strategy: 'local',
    })
  }
  return {
    user,
    logout,
    login,
  }
}
