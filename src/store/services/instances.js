// src/store/services/users.js
export function instances({ feathers }) {
  const { apiClient, apiVuex } = feathers
  const { BaseModel, makeServicePlugin } = apiVuex

  class Instance extends BaseModel {
    static modelName = 'Instance' // Required for $FeathersVuex plugin to work after production transpile.
    static instanceDefaults() {
      return {
        product: '',
        space: '',
        quantity: 0,
        purchaseDate: new Date(),
        untilDate: new Date(),
      }
    }
  }
  const servicePath = 'instances'
  const vuexPlugin = makeServicePlugin({
    Model: Instance,
    service: apiClient.service(servicePath),
    servicePath,
  })

  // Setup the client-side Feathers hooks.
  apiClient.service(servicePath).hooks({})

  return vuexPlugin
}
