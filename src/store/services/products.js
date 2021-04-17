// src/store/services/users.js
export function products({ feathers }) {
  const { apiClient, apiVuex } = feathers
  const { BaseModel, makeServicePlugin } = apiVuex

  class Product extends BaseModel {
    static modelName = 'Product' // Required for $FeathersVuex plugin to work after production transpile.
    static instanceDefaults() {
      return {
        name: '',
        unit: 'UNIT',
        defaultQuantity: 1
      }
    }
  }
  const servicePath = 'products'
  const vuexPlugin = makeServicePlugin({
    Model: Product,
    service: apiClient.service(servicePath),
    servicePath,
  })

  // Setup the client-side Feathers hooks.
  apiClient.service(servicePath).hooks({})

  return vuexPlugin
}
