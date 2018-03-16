<template>
<div class="SpaceForRent">
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6">
            <h1 class="title">
              Space for Rent & Events
            </h1>
            <h2 class="subtitle">
              <ul>
                <li>
                  <p>
                    We are 231 meters square space at Dunajska 14, Bratislava where we have meetup area for 80 people.
                  </p>
                </li>
                <li>
                  <p>
                    We are non-profit organization, we mostly giving space for technical and technological meetups for free.
                  </p>
                </li>
                <li>
                  <p>
                    But some small financial support for our running costs are welcome and it will help us with rent in next month.
                  </p>
                </li>
                <li>
                  <p>
                    We appreaciate if you can donate us for three hours evening event from 20€ to 60€+
                  </p>
                </li>
                <li>

                </li>
              </ul>





            </h2>
            <p>
              You can contact us via email or messenger
            </p>
            <p><br />
              <a class="button is-info is-medium is-outlined" href="mailto:info@progressbar.sk">info@progressbar.sk</a>
              <a class="button is-info is-medium is-outlined" href="https://m.me/progressbar">Contact us via ⚡️Messenger</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SpaceForRent',
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
        baseWebUrl: 'https://cowork.progressbar.sk/',
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
