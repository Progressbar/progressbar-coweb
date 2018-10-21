<template>
<div class="sponsors">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8 content">
        <h1 class="title has-text-grey-light">
          Call for Sponsors & Partners
        </h1>
        <img src="/static/img/tribune.jpg" alt="tribune" />
        <h2 class="subtitle has-text-grey-light">
          <br />
          Progressbar hackerspace is looking for sponsors & partners to help us with the space.
          We can offer to give our sponsors marketing push.</br></br>
          The plan is to raise at least 2000€ to cover the monthly cashflow, mostly rent.
          The new space will be 231 squares meters big.</br></br>
          We are in need to cover the costs of coworking equipment and sound-proof glass meeting room.</br>
          The lab will be kept as hackerspace component.</br></br>
          The space capacity is about 80 people for meetups. Meetup organizators, contact us.
          Tech meetups are preferred.</br></br>

          We can offer you to place your banner/rollup in our space.</br>
          We can put your company logo on our page.</br>
        </h2>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'CallForTheSponsors',
  data() {
    return {
      seats: {
        subscribers: 0,
        capacity: 0
      },
      credited: 0,
      orderSum: {},
      newSubscriber: {
        email: ''
      },
      button: {
        subscribe: 'Register for cowork',
        verify: '__',
        login: 'Send login link',
        order: 'Go to Dashboard'
      },
      daysBooked: 0,
      subEmail: '',
      isUser: false,
      config: {
        baseWebUrl: 'https://progressbar.sk/',
        orderPrices: {
          day: 4,
          month: 80,
          fix: 160,
          locker: 10,
          nonstop: 20
        },
        openHours: {
          monthPass: {
            start: 6,
            end: 18
          },
          dayPass: {
            start: 9,
            end: 18
          }
        },
        coworkLogin: false,
        coworkSubscribe: false
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
