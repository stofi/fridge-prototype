// src/store/services/users.js
export function spaces({ feathers }) {
  const { apiClient, apiVuex } = feathers
  const { BaseModel, makeServicePlugin } = apiVuex

  class Space extends BaseModel {
    static modelName = 'Space' // Required for $FeathersVuex plugin to work after production transpile.
    static instanceDefaults() {
      return {
        name: '',
        group: ''
      }
    }
  }
  const servicePath = 'spaces'
  const vuexPlugin = makeServicePlugin({
    Model: Space,
    service: apiClient.service(servicePath),
    servicePath,
  })

  // Setup the client-side Feathers hooks.
  apiClient.service(servicePath).hooks({})

  return vuexPlugin
}
