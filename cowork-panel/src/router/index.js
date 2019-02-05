import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import EmailVerify from '@/components/EmailVerify'
import Order from '@/components/Order'
import Login from '@/components/Login'
import Credit from '@/components/Credit'
import Photos from '@/components/Photos'
import MeetingRoom from '@/components/MeetingRoom'
import FixDesk from '@/components/FixDesk'
import CallForTheSponsors from '@/components/CallForTheSponsors'
import SpaceForRent from '@/components/SpaceForRent'
import GiveUsReviewBooking from '@/components/GiveUsReviewBooking'
import GiveUsReviewAfterVisit from '@/components/GiveUsReviewAfterVisit'
import RunningCosts from '@/components/RunningCosts'
import Sponsors from '@/components/Sponsors'
import D14 from '@/components/D14'
import Venue from '@/components/Venue'
import CallForHost from '@/components/CallForHost'
import ContactPage from '@/components/ContactPage'
import Page404 from '@/components/Page404'
import VueLocalStorage from 'vue-ls'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

var options = {
  namespace: 'pgbcowork_'
}

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLocalStorage, options)
Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/meeting-room-cowork-bratislava',
      component: MeetingRoom
    },
    {
      path: '/fixdesk-cowork-bratislava',
      component: FixDesk
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
      path: '/give-us-review-thanks',
      component: GiveUsReviewAfterVisit
    },
    {
      path: '/give-us-review-thanks/:coworkerName',
      component: GiveUsReviewAfterVisit
    },
    {
      path: '/free-daypass-thanks/:coworkerName',
      component: GiveUsReviewBooking
    },
    {
      path: '/sponsors',
      component: Sponsors
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
    },
    {
      path: '/contact',
      component: ContactPage
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
