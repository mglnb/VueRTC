import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Auth/Login'
import SignUp from '@/components/Auth/SignUp'
import Home from "@/components/Views/Home";
import {requireAuth, notRequireAuth} from '@/auth'
Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      meta: {requireAuth: true},
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      meta: {notAuthRequired:true},
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      meta: {notAuthRequired:true},
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    requireAuth(to, from, next)
  } else if (to.matched.some(record => record.meta.notAuthRequired)) {
    notRequireAuth(to, from, next)
  } else {
    next()
  }
})


export default router