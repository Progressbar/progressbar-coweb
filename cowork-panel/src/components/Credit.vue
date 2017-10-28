<template>
<div class="order">
    <div class="columns">
          <div class="column">
                <article class="message">
                  <div class="message-header">
                    <p>FIAT (€)</p>
                  </div>
                  <div class="message-body">
                    IBAN: {{ this.button.fiat.iban }} <br />
                    Payment Reference: {{ this.button.fiat.paymentReference }}
                  </div>
                </article>
          </div>
          <div class="column">
                <article class="message">
                  <div class="message-header">
                    <p>Bitcoin (BTC)</p>
                  </div>
                  <div class="message-body">
                    Bitcoin address: {{ this.button.bitcoin.address }} <br />
                    Explorer: <a :href="this.button.bitcoin.explorer+this.button.bitcoin.address">{{ this.button.bitcoin.address }}</a>
                  </div>
                </article>
          </div>
          <div class="column">
                <article class="message">
                  <div class="message-header">
                    <p>Litecoin (LTC)</p>
                  </div>
                  <div class="message-body">
                    Litecoin address: {{ this.button.litecoin.address }} <br />
                    Explorer: <a :href="this.button.litecoin.explorer + this.button.litecoin.address">{{ this.button.litecoin.address }} </a>
                  </div>
                </article>
          </div>
    </div>
    <div class="columns">
      <div class="column">
        <article class="message is-info is-small">
          <div class="message-body">
            If you just made payment, let me know via messenger at <a href="https://m.me/matej.wao.nemcek">m.me/matej.wao.nemcek</a> and I can just pair your payment and credit you in system. In future this will be automated, no-humans.
          </div>
        </article>
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
        fiat: {
          iban: 'SK1583300000002600121198',
          paymentReference: '',
          amount: 10
        },
        bitcoin: {
          address: '1PbZsxCh5GVwvaPkvXeFNH6sh6TzggJfXJ',
          explorer: 'https://blockchain.info/address/'
        },
        litecoin: {
          address: 'LKWvZG5oeq2bW9k5nnym2PCGTDaN7BedDN',
          explorer: 'https://live.blockcypher.com/ltc/address/'
        }
      },
      auth: {
        user: '',
        authToken: '',
        gotCredit: false,
        isUser: false
      },

    }
  },
  created() {
    this.getPaymentInfo()
  },
  methods: {
    getPaymentInfo() {
      if (this.$ls.get('user')) {
        this.button.fiat.paymentReference = this.$ls.get('user').slice(-12)
      }
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
