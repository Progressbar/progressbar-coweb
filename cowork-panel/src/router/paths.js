const Page404 = () => import('@/components/Page404')
const Podcast = () => import('@/components/Podcast')
const Subscribe = () => import('@/components/Subscribe')
const WeekPass = () => import('@/components/WeekPass')
const CallForTheSponsors = () => import('@/components/CallForTheSponsors')
const GiveUsReviewBooking = () => import('@/components/GiveUsReviewBooking')
const GiveUsReviewAfterVisit = () => import('@/components/GiveUsReviewAfterVisit')
const Calendar = () => import('@/components/Calendar')
const PrivateOffice = () => import('@/components/PrivateOffice')
const Crowdfunding = () => import('@/components/Crowdfunding')
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
const Video = () => import('@/components/Video')

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
    path: '/team',
    component: Team
  },
  {
    path: '/silent-place-to-work-in-bratislava',
    component: SilentPlace
  },
  {
    path: '/place-for-your-community-meetup-in-bratislava',
    component: Community,
    name: Community
  },
  {
    path: '/video',
    component: Video
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
