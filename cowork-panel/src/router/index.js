import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import EmailVerification from '@/components/EmailVerify'
import Order from '@/components/Order'
import Login from '@/components/Login'
import VueLocalStorage from 'vue-ls'

var options = {
  namespace: 'pgbcowork_'
};

Vue.use(VueLocalStorage, options);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/email/:verificationCode',
      component: EmailVerification
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/login/:loginCode',
      component: Login
    }
  ]
})
