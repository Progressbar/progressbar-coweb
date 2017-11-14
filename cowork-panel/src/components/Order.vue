<template>
<div class="order">
    <div class="columns is-mobile is-centered">
          <div class="column is-narrow">
                <a class="button is-white is-outlined" disabled>👋 {{ this.button.welcome }}</a>
          </div>
    </div>
    <div class="columns is-mobile is-centered">
      <div class="column is-narrow">
        <a class="button is-white is-outlined" disabled>💳 Credit {{ this.button.credit }}</a>
      </div>
      <div class="column is-narrow">
        <a href="./#/credit" class="button is-white is-outlined">Fuel ⛽ ⬆️ credit</a>
      </div>
    </div>
    <div v-if="this.auth.gotOrderToday" class="columns is-mobile is-centered">
      <div class="column is-narrow">
        <a @click="unlockBlackDoors()" class="button is-primary is-outlined">{{ this.button.blackdoor }}</a>
      </div>
      <div class="column is-narrow">
        <a @click="unlockDoors()" class="button is-primary is-outlined">{{ this.button.unlockdoor }}</a>
      </div>
    </div>
    <div v-if="this.auth.gotCredit" class="columns is-centered">
          <div class="column is-narrow">
            <div class="select is-primary">
              <!-- <select @change="orderCalculate()" v-model="orderCalc.program" >
                <option disabled value="">Choose program</option>
                <option v-for="(item, index) in config.orderPrices" v-bind:item="item" v-bind:index="index">
                  {{ index }}
                </option>
              </select> -->
              <select @change="orderCalculate()" v-model="orderCalc.program" >
                <option disabled value="">Choose program</option>
                <option value="day">Daypass</option>
              </select>
            </div>
          </div>
          <div class="column is-narrow">
            <flat-pickr @change="orderCalculate()" v-model="orderCalcDate" placeholder="Select date"></flat-pickr>
          </div>
    </div>
    <div v-if="this.auth.gotCredit" class="columns is-mobile is-centered">
      <div class="column is-narrow">
        <a class="button is-success is-outlined" disabled>{{ 'Price ' + this.orderCalc.total + ' €' }}</a>
      </div>
      <div class="column is-narrow">
        <a @click="orderCowork()" class="button is-success is-outlined">{{ this.button.order }}</a>
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
              Flex (30 Days)
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
                  ♨️ desk
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
        <a class="button is-outlined is-light" disabled>{{this.seats.capacity}} 💺 capacity</a>
      </div>
      <div class="column is-narrow">
          <a @click="getSubscribers()" class="button is-outlined is-light">{{this.seats.subscribers}} 📩👨‍💻⚙</a>
      </div>
      <div class="column is-narrow">
          <a class="button is-outlined is-light" disabled>{{this.daysBooked}} 📅 👨‍💻💰 </a>
      </div>
      <div class="column is-narrow">
          <a class="button is-outlined is-dark" disabled>{{this.credited}} 👨‍💻💰 </a>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <a v-for="item in orderSum" class="button is-outlined is-light" disabled>
          {{ item[1]+1 }}/{{item[2]}} | {{ item[0] }} 👩‍💻 {{ seats.capacity - item[0] }} 🆓 </a>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/dark.css'

export default {
  name: 'order',
  components: {
      flatPickr
  },
  data() {
    return {
      button: {
        welcome: '',
        order: '📅📙 Book',
        credit: 0,
        unlockdoor: 'White 🚪 doors',
        blackdoor: 'Black 🚪 doors'
      },
      auth: {
        user: '',
        authToken: '',
        gotCredit: false,
        gotOrderToday: false,
        isUser: false,
        credit: 0
      },
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
      },
      orderCalc: {
        program: '',
        date: '',
        dateTimestamp: '',
        total: 0
      },
      orderCalcDate: '',
      seats: {
        subscribers: 0,
        capacity: 0
      },
      daysBooked: 0,
      credited: 0,
      orderSum: {}
    }
  },
  created() {
    this.enableOrder()
    // this.getSubscribers()
  },
  watch: {
    orderCalcDate: function() {
      this.orderCalc.dateTimestamp = new Date(this.orderCalcDate).getTime()
      if (this.orderCalc.program === 'day') {
        this.orderCalc.total = this.config.orderPrices.day
      }
    }
  },
  methods: {
    enableOrder(authToken) {
      this.auth.user = this.$ls.get('user')
      this.auth.authToken = this.$ls.get('authToken')
      axios({
          method: 'get',
          url: this.$api.base + this.$api.order,
          params: {
            authToken: this.auth.authToken
          }
        })
        .then(response => {
          // console.log(response)
          this.button.welcome = response.data.code
          this.button.credit = response.data.credit
          this.auth.credit = response.data.credit
          this.auth.gotOrderToday = response.data.gotOrderToday
          this.config = response.data.config
          this.seats.capacity = response.data.config.seatCapacity
          if (response.data.credit > 0) {
            this.auth.gotCredit = true
          }
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
            // console.log(response)
            this.seats = response.data.seats
            this.orderSum = response.data.orderSum
            this.daysBooked = response.data.daysBooked
            this.config = response.data.config
          })
          .catch(e => {
            console.log(e)
          })
    },
    orderCalculate() {
      this.orderCalc.dateTimestamp = new Date(this.orderCalc.date).getTime()
      if (this.orderCalc.program === 'day') {
        this.orderCalc.total = this.config.orderPrices.day
      }
      if (this.orderCalc.program === 'month') {
        this.orderCalc.total = this.config.orderPrices.month
      }
    },
    orderCowork() {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.orderCowork,
        params: {
          authToken: this.auth.authToken,
          date: this.orderCalc.dateTimestamp,
          plan: this.orderCalc.program
        }
      })
      .then(response => {
        // console.log(response)
        this.button.order = response.data.code
      })
      .catch(e => {
        console.log(e)
      })
    },
    unlockDoors(authToken) {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.openDoor,
        params: {
          authToken: this.auth.authToken
        }
      })
      .then(response => {
        // console.log(response)
        this.button.unlockdoor = response.data.code
      })
      .catch (e => {
        console.log(e)
      })
    },
    unlockBlackDoors(authToken) {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.openBlackDoor,
        params: {
          authToken: this.auth.authToken
        }
      })
      .then(response => {
        // console.log(response)
        this.button.blackdoor = response.data.code
      })
      .catch (e => {
        console.log(e)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input {
  background-color: #ffffff
}
</style>
