import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupFeathers } from './feathers'
import { setupStore } from './store/store'
import "./assets/tailwind.css"

const app = createApp(App)
const feathers = setupFeathers({})

app.use(router)
app.use(setupStore({ feathers }))

app.provide('feathers', feathers)


Object.values(import.meta.globEager('./modules/*.js')).map((i) =>
  i.install?.({ app, isClient: true, router })
)

app.mount('#app')

