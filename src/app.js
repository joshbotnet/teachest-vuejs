import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import materialdesign from './plugins/MaterialDesign'
import graphql from './plugins/GraphQL'
sync(store, router)

const app = new Vue({
  router,
  store,
  materialdesign,
  graphql,
  ...App
})

export {app, router, store, materialdesign, graphql}
