// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from './firebase'

Vue.config.productionTip = false


/**
 * A Firebase db
 */
Vue.prototype.$db = firebase.db
Vue.prototype.$auth = firebase.auth

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
