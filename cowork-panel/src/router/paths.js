import Subscribe from '@/components/Subscribe'
import EmailVerify from '@/components/EmailVerify'
import Order from '@/components/Order'
import Login from '@/components/Login'
import Credit from '@/components/Credit'
import MeetingRoom from '@/components/MeetingRoom'
import FixDesk from '@/components/FixDesk'
import FlexDesk from '@/components/FlexDesk'
import WeekPass from '@/components/WeekPass'
import CallForTheSponsors from '@/components/CallForTheSponsors'
import RentASpace from '@/components/RentASpace'
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

const paths = [
  {
    path: '/',
    component: Subscribe
  },
  {
    path: '/coworking-bratislava',
    component: Subscribe
  },
  {
    path: '/meeting-room-cowork-bratislava',
    component: MeetingRoom
  },
  {
    path: '/rent-meeting-room-cowork-bratislava',
    component: MeetingRoom
  },
  {
    path: '/rent-flexdesk-cowork-bratislava',
    component: FlexDesk
  },
  {
    path: '/rent-flex-desk-coworking-bratislava',
    component: FlexDesk
  },
  {
    path: '/rent-fixdesk-cowork-bratislava',
    component: FixDesk
  },
  {
    path: '/rent-fix-desk-coworking-bratislava',
    component: FixDesk
  },
  {
    path: '/fixdesk-cowork-bratislava',
    component: FixDesk
  },
  {
    path: '/fix-desk-cowork-bratislava',
    component: FixDesk
  },
  {
    path: '/rent-desk-cowork-bratislava',
    component: FixDesk
  },
  {
    path: '/day-week-pass-coworking-bratislava',
    component: WeekPass
  },
  {
    path: '/call-for-the-sponsors',
    component: CallForTheSponsors
  },
  {
    path: '/rent-a-space',
    component: RentASpace
  },
  {
    path: '/space-for-rent',
    component: RentASpace
  },
  {
    path: '/venue',
    component: RentASpace
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
    path: '/contact',
    component: ContactVenue
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
    path: '*',
    component: Page404
  }
]

export default paths
// module.exports = { default: paths }
