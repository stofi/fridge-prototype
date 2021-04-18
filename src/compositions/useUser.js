import { computed, inject, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default function () {
  const { state, dispatch, getters } = useStore()
  const authState = computed(() => state.auth)
  const user = computed(() => getters['auth/user'])
  const feathers = inject('feathers')
  const authOptions = feathers.apiClient.authentication.options

  if (authOptions != null && !user.value) {
    const accessToken = feathers.apiClient.authentication.options.storage.getItem(
      'feathers-jwt'
    )
    if (!!accessToken) {
      feathers.apiClient.reAuthenticate().then((a) => {
        dispatch('auth/authenticate')
      })
    }
  }

  function logout() {
    dispatch('auth/logout')
  }
  function login(email, password) {
    dispatch('auth/authenticate', {
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
