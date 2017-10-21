<template>
<div class="order">
    <div class="columns">
          <div class="column is-narrow">
                <a class="button is-light is-medium is-outlined" disabled>{{ this.button.welcome }}</a>
          </div>
    </div>
    <div class="columns is-mobile">
          <div class="column is-narrow">
                <a class="button is-light is-medium is-outlined" disabled>Credit {{ this.button.credit }}</a>
          </div>
          <div class="column is-narrow">
                <a class="button is-light is-medium is-outlined" disabled>⛽ credit</a>
          </div>
    </div>
    <div class="columns is-mobile">
          <div class="column is-narrow">
                <a @click="unlockDoors()" class="button is-primary is-medium is-outlined">{{ this.button.unlockdoor }}</a>
          </div>

    </div>
    <div class="columns is-mobile">
          <div class="column is-narrow">
            <div class="select is-primary is-medium is-outlined">
              <select v-model="orderCalc.program">
                <option disabled value="">Choose program</option>
                <option v-for="(item, index) in config.orderPrices" v-bind:item="item" v-bind:index="index">
                  {{ index }}
                </option>
              </select>
            </div>
          </div>
          <div class="column is-narrow">
            <div class="select is-medium">
              <select @change="orderCalculate()" v-model="orderCalc.date">
                <option disabled value="">Choose day</option>
                <option v-for="item in orderCalc.dateRange">
                  {{ item.date }}
                </option>
              </select>
            </div>
          </div>
          <div class="column is-narrow">
                <a @click="" class="button is-primary is-medium is-outlined">{{ this.button.order + ' for ' + this.orderCalc.total + ' €'}}</a>
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
                  {{ this.config.orderPrices.fix }}€ / month
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
</div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'order',
  data() {
    return {
      button: {
        welcome: '',
        order: 'Book',
        credit: '',
        unlockdoor: 'Unlock doors'
      },
      auth: {
        user: '',
        authToken: '',
        gotCredit: false,
        isUser: false
      },
      config: {
        baseWebUrl: 'https://progressbar-cowork.netlify.com/',
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
      },
      orderCalc: {
        program: '',
        date: '',
        dateRange: [{ date: 20170923 }, { date: 20170924 }, { date: 20170925 }, { date: 20170926 }],
        total: 0
      }
    }
  },
  created() {
    this.enableOrder()
    this.getSubscribers()
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
          console.log(response)
          this.button.welcome = response.data.code
          this.button.credit = response.data.credit
          this.credit = response.data.credit
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
            console.log(response)
            this.seats = response.data.seats
            this.orderSum = response.data.orderSum
            this.config = response.data.config
          })
          .catch(e => {
            console.log(e)
          })
    },
    orderCalculate() {
      console.log(this.orderCalc.program + this.orderCalc.date)
      this.orderCalc.total = 6
    },
    generateDateRange() {
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
        console.log(response)
        this.button.unlockdoor = response.data.code
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
</style>
