import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import Status from '@/components/Status'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Subscribe',
      component: Subscribe
    }
  ]
})
