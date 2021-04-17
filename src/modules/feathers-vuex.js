import { FeathersVuex } from '@feathersjs/vuex'

export const install = ({ app }) => {
  app.use(FeathersVuex)
}
