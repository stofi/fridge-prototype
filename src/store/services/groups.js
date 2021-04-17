// src/store/services/users.js
export function groups({ feathers }) {
  const { apiClient, apiVuex } = feathers
  const { BaseModel, makeServicePlugin } = apiVuex

  class Group extends BaseModel {
    static modelName = 'Group' // Required for $FeathersVuex plugin to work after production transpile.
    static instanceDefaults() {
      return {
        name: '',
        owner: '',
        members: []
      }
    }
  }
  const servicePath = 'groups'
  const vuexPlugin = makeServicePlugin({
    Model: Group,
    service: apiClient.service(servicePath),
    servicePath,
  })

  // Setup the client-side Feathers hooks.
  apiClient.service(servicePath).hooks({})

  return vuexPlugin
}
