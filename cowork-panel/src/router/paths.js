import Subscribe from '@/components/Subscribe'
import WeekPass from '@/components/WeekPass'
import CallForTheSponsors from '@/components/CallForTheSponsors'
import GiveUsReviewBooking from '@/components/GiveUsReviewBooking'
import GiveUsReviewAfterVisit from '@/components/GiveUsReviewAfterVisit'
import RunningCosts from '@/components/RunningCosts'
import Podcast from '@/components/Podcast'
import CallForHost from '@/components/CallForHost'
import Page404 from '@/components/Page404'
import Calendar from '@/components/Calendar'
import PrivateOffice from '@/components/PrivateOffice'
import Crowdfunding from '@/components/Crowdfunding'
// import FlexDesk from '@/components/FlexDesk'
// import FixDesk from '@/components/FixDesk'
// import Pay from '@/components/Pay'
// import ContactVenue from '@/components/ContactVenue'
// import SilentPlace from '@/components/SilentPlace'
// import Community from '@/components/Community'
// import RentASpace from '@/components/RentASpace'
// import MeetingRoom from '@/components/MeetingRoom'
const FlexDesk = () => import('@/components/FlexDesk')
const FixDesk = () => import('@/components/FixDesk')
const Team = () => import('@/components/Team')
const Network = () => import('@/components/Sponsors')
const Pay = () => import('@/components/Pay')
const Residents = () => import('@/components/Residents')
const ContactVenue = () => import('@/components/ContactVenue')
const SilentPlace = () => import('@/components/SilentPlace')
const MeetingRoom = () => import('@/components/MeetingRoom')
const RentASpace = () => import('@/components/RentASpace')
const Community = () => import('@/components/Community')

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
    path: '/rent-meeting-room-coworking-bratislava',
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
    component: Network
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
    path: '/silent-place-to-work-in-bratislava',
    component: SilentPlace
  },
  {
    path: '/place-for-your-community-meetup-in-bratislava',
    component: Community
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

export default paths
// module.exports = { default: paths }
