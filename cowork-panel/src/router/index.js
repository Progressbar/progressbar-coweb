import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import EmailVerify from '@/components/EmailVerify'
import Order from '@/components/Order'
import Login from '@/components/Login'
import Credit from '@/components/Credit'
import Photos from '@/components/Photos'
import CallForTheSponsors from '@/components/CallForTheSponsors'
import SpaceForRent from '@/components/SpaceForRent'
import RunningCosts from '@/components/RunningCosts'
import Sponsors from '@/components/Sponsors'
import D14 from '@/components/D14'
import WorkInProgress from '@/components/WorkInProgress'
import Venue from '@/components/Venue'
import CallForHost from '@/components/CallForHost'
import VueLocalStorage from 'vue-ls'

var options = {
  namespace: 'pgbcowork_'
}

Vue.use(VueLocalStorage, options)
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/coworking-bratislava',
      component: Subscribe
    },
    {
      path: '/email/:verificationCode',
      component: EmailVerify
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
    },
    {
      path: '/credit',
      component: Credit
    },
    {
      path: '/coworking-progressbar-bratislava-photos',
      component: Photos
    },
    {
      path: '/call-for-the-sponsors',
      component: CallForTheSponsors
    },
    {
      path: '/space-for-rent',
      component: SpaceForRent
    },
    {
      path: '/running-costs',
      component: RunningCosts
    },
    {
      path: '/sponsors',
      component: Sponsors
    },
    {
      path: '/work-in-progress',
      component: WorkInProgress
    },
    {
      path: '/venue',
      component: Venue
    },
    {
      path: '/call-for-a-host',
      component: CallForHost
    },
    {
      path: '/d14',
      component: D14
    }
  ]
})
