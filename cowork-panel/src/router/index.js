import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/components/Subscribe'
import EmailVerify from '@/components/EmailVerify'
import Order from '@/components/Order'
import Login from '@/components/Login'
import Credit from '@/components/Credit'
import MeetingRoom from '@/components/MeetingRoom'
import FixDesk from '@/components/FixDesk'
import CallForTheSponsors from '@/components/CallForTheSponsors'
import SpaceForRent from '@/components/SpaceForRent'
import Residents from '@/components/Residents'
import GiveUsReviewBooking from '@/components/GiveUsReviewBooking'
import GiveUsReviewAfterVisit from '@/components/GiveUsReviewAfterVisit'
import RunningCosts from '@/components/RunningCosts'
import Podcast from '@/components/Podcast'
import Sponsors from '@/components/Sponsors'
import ContactVenue from '@/components/ContactVenue'
import CallForHost from '@/components/CallForHost'
import Page404 from '@/components/Page404'
import Team from '@/components/Team'
import Pay from '@/components/Pay'
import Calendar from '@/components/Calendar'
import PrivateOffice from '@/components/PrivateOffice'
import Crowdfunding from '@/components/Crowdfunding'
import VueLocalStorage from 'vue-ls'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueQr from 'vue-qr'
import VueMeta from 'vue-meta'

var options = {
  namespace: 'pgbcowork_'
}

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLocalStorage, options)
Vue.use(VueQr)
Vue.use(VueMeta)
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
      path: '/call-for-the-sponsors',
      component: CallForTheSponsors
    },
    {
      path: '/rent-a-space',
      component: SpaceForRent
    },
    {
      path: '/venue',
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
      path: '/pay',
      component: Pay
    },
    {
      path: '/calendar',
      component: Calendar
    },
    {
      path: '/network',
      component: Sponsors
    },
    {
      path: '/our-residents',
      component: Residents
    },
    {
      path: '/podcast',
      component: Podcast
    },
    {
      path: '/contact-venue',
      component: ContactVenue
    },
    {
      path: '/call-for-a-host',
      component: CallForHost
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/crowdfunding',
      component: Crowdfunding
    },
    {
      path: '/rent-private-office-bratislava',
      component: PrivateOffice
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
