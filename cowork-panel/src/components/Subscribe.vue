<template>
<div class="subscribe">
  <div class="columns is-mobile">
    <div class="column is-8">
      <article class="message is-small is-info">
        <div class="message-body">
          We plan to open co-work in our Progressbar hackerspace in upcoming weeks. Co-work system is in development and will be soon available for closed testing. Before it's production-ready, you can subscribe to the queue and we will keep you updated.
        </div>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-narrow">
        <a class="button is-outlined is-info" disabled>{{this.seats.subscribers}} 📩👨‍💻⚙</a>
    </div>
    <div class="column is-narrow">
        <a class="button is-outlined is-info" disabled>{{this.credited}} 👨‍💻💰 </a>
    </div>
    <div class="column is-narrow">
        <a class="button is-outlined is-info" disabled>{{this.seats.capacity}} 💺 capacity</a>
    </div>
  </div>
  <div class="columns">
    <div class="column is-narrow">
      <a v-for="item in orderSum" class="button is-outlined is-white" disabled>
        📅 {{ item[1]+1 }}/{{item[2]+1}} 👨‍💻 {{ item[0] }} 🆓 {{ seats.capacity-item[0] }}</a>
    </div>
  </div>
  <div class="columns">
        <div class="column is-narrow">
              <div class="control has-icons-left">
                    <input v-model="subEmail" class="input is-medium is-white" type="email" placeholder="Enter your email">
                    <span class="icon is-medium is-left">
                          <i class="fa fa-envelope"></i>
                    </span>
              </div>
        </div>
        <div class="column is-narrow">
          <a v-if="this.coworkSubscribe" @click="subscribeMe(subEmail)" class="button is-warning is-medium is-outlined">{{ this.button.subscribe }}</a>
          <a v-if="!this.coworkSubscribe" @click="subscribeMe(subEmail)" class="button is-warning is-medium is-outlined" disabled>{{ this.button.subscribe }}</a>
        </div>
  </div>
  <div class="columns">
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            In 🌌 space we have
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
                <a href="#" title="1080p HDMI/DVI mostly">🖥 External monitors (shared)</a>
              </li>
              <li>
                <a href="http://www.ikea.com/sk/sk/catalog/products/S29084966/" title="IKEA SKARSTA">Standing desks (shared)</a>
              </li>
              <li>
                <a href="https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/21765459_1941520825863850_876389467015918658_o.jpg?oh=7de68da52211a7304d10a3298d7e02fc&oe=5A538F7E">Lot of ⚡️ electric 🔌 sockets </a>
              </li>
              <li>
                Place to 🗣📞 call (@Foyer)
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
            Our Kitchen
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns">
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
                9am - 6pm
              </li>
              <li>
                ♨️ Desk
              </li>
              <li>
                6€ / day
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
            Flex
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                7am - 9pm
              </li>
              <li>
                ♨️ Desk
              </li>
              <li>
                60€ / month
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
            Homie
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
                160€ / month
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Locker
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                10€ / month
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
            24/7 access
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                40€ / month
              </li>
            </ul>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns is-mobile">
    <div class="column is-narrow">
      <a class="button is-medium is-outlined is-white" href="#" disabled>See the workspace (VR)</a>
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
        free: '0',
        subscribers: '0',
        capacity: '0',
        allocatedToday: '0'
      },
      credited: 0,
      orderSum: {
        1507154400000: [ 6, 9, 5 ],
        1507068000000: [ 7, 9, 4 ],
        1506981600000: [ 8, 9, 3 ],
        1506895200000: [ 9, 9, 2 ] },
      coworkSubscribe: false,
      newSubscriber: {
        email: ''
      },
      button: {
        subscribe: 'Subscribe to the queue',
        verify: '__'
      },
      subEmail: ''
    }
  },
  created() {
    this.getSubscribers()
  },
  methods: {
    getSubscribers() {
        axios({
            method: 'get',
            url: this.$api.base + this.$api.subscribers
          })
          .then(response => {
            console.log(response)
            this.seats = response.data.seats
            this.orderSum = response.data.orderSum
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
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input {
  background-color: #000
}
</style>
