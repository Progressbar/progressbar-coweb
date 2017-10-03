import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import emailVerification from '@/components/emailVerification'
import order from '@/components/order'
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
      component: emailVerification
    },
    {
      path: '/order',
      component: order
    }
  ]
})
