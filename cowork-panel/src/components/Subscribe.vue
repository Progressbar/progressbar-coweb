<template>
<div class="subscribe">
  <!-- <div class="columns">
    <div class="column is-4">
      <article class="message is-small is-info">
        <div class="message-body">
          We plan to open co-work in our Progressbar hackerspace in upcoming weeks. Co-work system is in development and will be soon available for closed testing.
        </div>
      </article>
    </div>
  </div> -->
  <div v-if="this.isUser" class="columns is-mobile is-centered">
    <div class="column is-narrow">
        <a href="./#/order" class="button is-warning is-large is-outlined">{{ this.button.order }}</a>
    </div>
  </div>
  <div v-if="!this.isUser" class="columns is-centered">
        <div class="column is-narrow">
              <div class="control has-icons-left">
                    <input v-model="subEmail" class="input is-medium is-white" type="email" placeholder="Enter your email">
                    <span class="icon is-medium is-left">
                          <i class="fa fa-envelope"></i>
                    </span>
              </div>
        </div>
        <div class="column is-narrow">
          <a v-if="this.config.coworkSubscribe" @click="subscribeMe(subEmail)" class="button is-warning is-medium is-outlined">{{ this.button.subscribe }}</a>
          <a v-if="!this.config.coworkSubscribe" @click="subscribeMe(subEmail)" class="button is-warning is-medium is-outlined" disabled>{{ this.button.subscribe }}</a>
          <a v-if="this.config.coworkLogin" @click="sendLoginLink(subEmail)" class="button is-primary is-medium is-outlined">{{ this.button.login }}</a>
          <a v-if="!this.config.coworkLogin" @click="sendLoginLink(subEmail)" class="button is-primary is-medium is-outlined" disabled>{{ this.button.login }}</a>
        </div>
  </div>
  <div class="columns">
    <div class="column">
      <h1 id="blackh1">cowork Bratislava</h1>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            In our 🏢 cowork 👩‍🚀 space we have
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442259,17.1055539,17z/data=!4m8!1m2!3m1!2sProgressbar+hackerspace!3m4!1s0x0:0x72ac0b6fccaf66fd!8m2!3d48.1442778!4d17.1065933" title="Michalska 3, Bratislava">Place for your work in downtown</a>
              </li>
              <li>
                <a href="https://beta.speedtest.net/result/6614494632">High-speed Internet (250/20)</a><a href="https://beta.speedtest.net/result/a/3234065616">📱</a>
              </li>
              <li>
                <a href="http://www.ikea.com/sk/sk/catalog/products/S29084966/" title="IKEA SKARSTA">Standing desks (shared)</a>
              </li>
              <li>
                <a href="https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/21765459_1941520825863850_876389467015918658_o.jpg?oh=7de68da52211a7304d10a3298d7e02fc&oe=5A538F7E">Lot of ⚡️ electric 🔌 sockets </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442769,17.1065927,3a,75y,68.38h,60.45t/data=!3m8!1e1!3m6!1sAF1QipOS15iBvtp1oSLXg6nuorM282YC64pjorvA2LVk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOS15iBvtp1oSLXg6nuorM282YC64pjorvA2LVk%3Dw203-h100-k-no-pi-0-ya6.500005-ro-0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.1442784!4d17.1065933" title="1080p HDMI/DVI mostly">External 🖥  monitors (shared)</a>
              </li>
              <li>
                Room for calls 🗣📞 (@Foyer)
              </li>
              <li>
                Coding 👩🏽‍💻 girls have 50% discount
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Our ☕️ Kitchen
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                <a href="https://www.facebook.com/progressbar/photos/a.946997141982895.1073741833.140864112596206/1933082956707637/?type=3" title="drinks in fridge">🍹 Softdrinks ❄️ </a>
                <ul>
                  <li>
                    Club-Mate
                  </li>
                  <li>
                    Flora-power
                  </li>
                  <li>
                    Mana Roots
                  </li>
                  <li>
                    Pragomošt
                  </li>
                  <li>
                    <s>Mate-mate</s>
                  </li>
                </ul>
              </li>
              <li>
                <s>Twenny Bars (& Soylents)</s>
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Daypass
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                {{ this.config.openHours.dayPass.start }} - {{ this.config.openHours.dayPass.end }}
              </li>
              <li>
                ♨️ desk
              </li>
              <li>
                {{ this.config.orderPrices.day }}€ / day
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Flex (30 days)
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                {{ this.config.openHours.monthPass.start }} - {{ this.config.openHours.monthPass.end }}
              </li>
              <li>
                ♨️  desk
              </li>
              <li>
                {{ this.config.orderPrices.month }}€ / month
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <s>Homie</s>
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                24/7
              </li>
              <li>
                Fixdesk
              </li>
              <li>
                {{ this.config.orderPrices.fix }}€ / month
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <s>Locker</s>
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                {{ this.config.orderPrices.locker}}€ / month
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <s>24/7 access</s>
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                {{ this.config.orderPrices.nonstop}}€ / month
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <a class="button is-outlined is-white" href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442841,17.1065927,3a,75y,183.19h,75.08t/data=!3m8!1e1!3m6!1sAF1QipNt1o7jntatkvtpLmds5x7K4MHG_NCLMSfjSnyR!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNt1o7jntatkvtpLmds5x7K4MHG_NCLMSfjSnyR%3Dw203-h100-k-no-pi0-ya261.5-ro-0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.1442784!4d17.1065933" >Workspace Deck (360)</a>
    </div>
    <div class="column is-narrow">
      <a class="button is-outlined is-white" href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442769,17.1065927,3a,75y,68.38h,60.45t/data=!3m8!1e1!3m6!1sAF1QipOS15iBvtp1oSLXg6nuorM282YC64pjorvA2LVk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOS15iBvtp1oSLXg6nuorM282YC64pjorvA2LVk%3Dw203-h100-k-no-pi-0-ya6.500005-ro-0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.1442784!4d17.1065933">Workspace Cowork (360)</a>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <a class="button is-outlined is-dark" disabled>{{this.seats.capacity}} 💺 capacity</a>
    </div>
    <div class="column is-narrow">
        <a @click="getSubscribers()" class="button is-outlined is-dark">{{this.seats.subscribers}} 📩👨‍💻⚙</a>
    </div>
    <div class="column is-narrow">
        <a class="button is-outlined is-dark" disabled>{{this.daysBooked}} 📅 👨‍💻💰 </a>
    </div>
    <div class="column is-narrow">
        <a class="button is-outlined is-dark" disabled>{{this.credited}} 👨‍💻💰 </a>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <a v-for="item in orderSum" class="button is-outlined is-info" disabled>
        {{ item[1]+1 }}/{{item[2]}} 📅 {{ item[0] }} 👩‍💻 {{ seats.capacity - item[0] }} 🆓 </a>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'subscribe',
  data() {
    return {
      seats: {
        subscribers: '0',
        capacity: '0'
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
      daysBooked: '',
      subEmail: '',
      isUser: false,
      config: {
        baseWebUrl: 'https://cowork.progressbar.sk/',
        orderPrices: {
          day: 6,
          month: 80,
          fix: 160,
          locker: 10,
          nonstop: 40
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
  },
  created() {
    this.alreadyUser()
    this.getConfig()
    // this.getSubscribers()
  },
  methods: {
    alreadyUser() {
      if (this.$ls.get('user')) {
        this.isUser = true
      }
    },
    getConfig() {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.pubConfig
      })
      .then(response => {
        console.log(response)
        this.config = response.data
        this.seats.capacity = response.data.seatCapacity
      })
      .catch(e => {
        console.log(e)
      })
    },
    getSubscribers() {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.subscribers
      })
      .then(response => {
        console.log(response)
        this.seats = response.data.seats
        this.orderSum = response.data.orderSum
        this.daysBooked = response.data.daysBooked
        this.config = response.data.config
      })
      .catch(e => {
        console.log(e)
      })
    },
    subscribeMe(email) {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.newSubscriber,
        params: {
          email
        }
      })
      .then(response => {
        console.log(response)
        this.button.subscribe = response.data.code
      })
      .catch(e => {
        console.log(e)
      })
    },
    sendLoginLink(email) {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.login,
        params: {
          email
        }
      })
      .then(response => {
        console.log(response)
        this.button.subscribe = response.data.code
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*input {
  background-color: #000
}*/
h1#blackh1 {
  color:black;
}
</style>
