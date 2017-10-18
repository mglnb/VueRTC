import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Auth/Login'
import SignUp from '@/components/Auth/SignUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
