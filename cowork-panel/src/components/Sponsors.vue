<template>
<div class="sponsors">
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6">
            <h1 class="title">
              Beloved & Brave Sponsors of our <a href="https://progressbar.sk"> hackerspace Progressbar</a> & <a href="https://cowork.progressbar.sk"> Cowork Progressbar</a>
            </h1>
            <h2 class="subtitle">
              <ul>
                <li>
                   <a href="https://dcore.decent.ch">DCore</a><br />Blockchain you can actually build on. Innovative and customizable adaptation of blockchain technology allows you to mix and match DCore components to further your own projects.
                </li>
                <li>
                  <a href="https://decent.ch">DECENT</a><br /> is a Blockchain Content Distribution Platform that is Open-Source and utilizes Blockchain to ensure trust and security. Our intention is to revolutionize data distribution on the Internet.
                </li>
                <li>
                  <a href="https://www.bitpanther.com">BitPanther</a><br /> is a European financial technology platform focused on helping people to get access to digital currencies. BitPanther is a registered Slovakian company, compliant with Slovak and EU regulations.
                </li>
                <li>
                  <a href="https://wy.sk">wy</a><br /> We are your dream hoster, and your best choice for doing business on internet. We provide hosting to company websites, e-shops, blogs, huge portals or private presentations. We welcome individuals and freelancers, small teams and running businesses.
                </li>
                <li>
                  <a href="https://cowork.progressbar.sk">your favourite company</a>
                </li>
              </ul>
            </h2>
            <p>
              Want to sponsor us? Your name will be known in our hackerspace & cowork. We hosted 300+ technical and technological events so far.
              We can give you huge marketing push or find you geeks, engineers, software developers you are searching for.
              We are their daily place, where their come hangout on evenings or work during day
            </p>
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
  name: 'photos',
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
