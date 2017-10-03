<template>
<div class="order">
    <div class="columns">
          <div class="column is-narrow">
                <a class="button is-light is-medium is-outlined" disabled>{{ this.button.order }}</a>
          </div>
    </div>
    <div class="columns is-mobile">
          <div class="column is-narrow">
                <a class="button is-light is-medium is-outlined" disabled>Credit {{ this.button.credit }}</a>
          </div>
          <div class="column is-narrow">
                <a class="button is-light is-medium is-outlined" disabled>Fuel credit</a>
          </div>
    </div>
    <div class="columns">
          <div class="column is-narrow">
                <a class="button is-primary is-medium is-outlined">Unlock doors</a>
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
                  ♨️ Desk (shared)
                </li>
                <li>
                  6€ per day
                </li>
              </ul>
              <br>
            </div>
          </div>
          <footer v-if="this.auth.gotCredit" class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-medium is-outlined">Order</a>
              </span>
            </p>
          </footer>
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
                  6am - 10pm
                </li>
                <li>
                  ♨️ Desk
                </li>
                <li>
                  60€ per month
                </li>
              </ul>
              <br>
            </div>
          </div>
          <footer  v-if="this.auth.gotCredit" class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-medium is-outlined">Order</a>
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
                  160€ per month
                </li>
              </ul>
              <br>
            </div>
          </div>
          <footer v-if="this.auth.gotCredit" class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-medium is-outlined" disabled>Order</a>
              </span>
            </p>
          </footer>
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
                  10€ per month
                </li>
              </ul>
              <br>
            </div>
          </div>
          <footer v-if="this.auth.gotCredit" class="card-footer">
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
              24/7 access
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>
                  40€ per month
                </li>
              </ul>
              <br>
            </div>
          </div>
          <footer v-if="this.auth.gotCredit" class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-medium is-outlined" disabled>Order</a>
              </span>
            </p>
          </footer>
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
        order: '',
        credit: ''
      },
      auth: {
        user: '',
        authToken: '',
        gotCredit: false,
        isUser: false
      },
      credit: 0
    }
  },
  created() {
    this.enableOrder()
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
          this.button.order = response.data.code
          this.button.credit = response.data.credit
          this.credit = response.data.credit
          if (response.data.credit > 0) {
            this.auth.gotCredit = true
          }
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
/*@import '~bulma/css/bulma.css';*/
</style>
