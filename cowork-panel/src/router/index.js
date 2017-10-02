import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import emailVerification from '@/components/emailVerification'

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
    }
  ]
})
