<template>
<div class="subscribe">
    <div class="columns is-mobile">
      <div class="column is-narrow">
          <a class="button is-outlined is-danger" @click="getSubscribers()" href="#">{{this.seats.subscribers}} 📩 subscribers</a>
          <a class="button is-outlined is-primary" @click="getSubscribers()" href="#">{{this.seats.waitlist}} 👨‍💻 on waitlist</a>
          <a class="button is-outlined is-success" href="#">{{this.seats.free}} free 💺</a>
          <a class="button is-outlined is-info" v-on:onload="subscribers()" href="#">capacity {{this.seats.capacity}} 💺</a>
      </div>
    </div>
      <div class="columns">
            <div class="column is-narrow">
                  <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-white" type="email" placeholder="Enter your email">
                        <span class="icon is-medium is-left">
                              <i class="fa fa-envelope"></i>
                        </span>
                  </div>
            </div>
            <div class="column is-narrow">
              <a class="button is-warning is-medium is-outlined" disabled>Subscribe to the queue</a>
            </div>
      </div>
<div class="columns">
  <div class="column is-narrow">
    <div class="card">

    </div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Every package includes
        </p>
      </header>

      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442331,17.1066804,17z/">Place for your work in downtown</a>
            </li>
            <li>
              <a href="http://beta.speedtest.net/result/6614494632">High-speed Internet (250/20)</a>
            </li>
            <li>
              🖥 External monitor (optional)
            </li>
            <li>
              <a href="http://www.ikea.com/sk/sk/catalog/products/S29084966/">Standing desk</a> (shared)
            </li>
            <li>
              Place to 🗣📞 call (@Foyer)
            </li>
            <li>
              Kitchen
            </li>
            <li>
              🍹 <a href="https://www.facebook.com/progressbar/photos/a.946997141982895.1073741833.140864112596206/1933082956707637/?type=3" alt="drink in fridge">Softdrinks</a>
              <ul>
                <li>
                  Club-Mate
                </li>
                <li>
                  Flora-power
                </li>
                <li>
                  other Maté-like
                </li>
              </ul>
            </li>
            <li>
              Twenny Bars (& Soylents)
            </li>
            <li>
              Hardware Lab
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
          Daypass
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            🎧
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              7am - 10pm
            </li>
            <li>
              HotDesk (shared)
            </li>
            <li>
              5€ per day
            </li>
          </ul>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>Order</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
  <div class="column is-narrow">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Worker
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            🎧
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              24/7
            </li>
            <li>
              HotDesk
            </li>
            <li>
              60€ per month
            </li>
          </ul>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>Order</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
  <div class="column is-narrow">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Homie
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            🎧
          </span>
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
              140€ per month
            </li>
          </ul>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>Order</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
</div>
<div class="columns is-mobile">
  <div class="column is-narrow">
    <a class="button is-medium is-outlined is-light" href="#" disabled>See the workspace (VR)</a>
  </div>
</div>
</div>
</template>

<script>
import Status from '@/components/Status'
import axios from 'axios'

export default {
  name: 'subscribe',
  data() {
    return {
      seats: {
        free: 9,
        subscribers: 9,
        waitlist: 9,
        capacity: 9,
        allocatedDay: 9
      },
      api: {
        base: 'https://us-central1-coweb-bc478.cloudfunctions.net/',
        subscribers: 'subscribers/'
      },
      cowork: 0
    }
  },
  mounted: function() {
    this.getSubscribers()
  },
  methods: {
    getSubscribers() {
        axios({
            method: 'get',
            url: this.api.base + this.api.subscribers
          })
          .then(response => {
            console.log(response)
            this.seats = response.data.seats
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
@import '~font-awesome/css/font-awesome.css';
/*@import '~bulma/css/bulma.css';*/
input {
  background-color: #000
}
</style>
