<template>
<div class="offer">
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
                Hotdesk ♨️
              </li>
              <li>
                {{ this.config.orderPrices.day }}€ / day
              </li>
            </ul>
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
                Hotdesk ♨️
              </li>
              <li>
                {{ this.config.orderPrices.month }}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Fixdesk
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                6 - 18
              </li>
              <li>
                Fixdesk
              </li>
              <li>
                {{ this.config.orderPrices.fix }}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Meeting room 🤝
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                10 chairs
              </li>
              <li>
                Whiteboard
              </li>
              <li>
                5€ / hour
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            24/7 access (addon)
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                Work any 🕙
              </li>
              <li>
                {{ this.config.orderPrices.nonstop}}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="column is-narrow">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <s>Locker (addon)</s>
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                Lock your 💎 💻
              </li>
              <li>
                {{ this.config.orderPrices.locker}}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'offer',
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
          day: 8,
          month: 100,
          fix: 180,
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
input {
  background-color: #ffffff;
}
</style>
