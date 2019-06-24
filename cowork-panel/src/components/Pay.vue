<template>
  <div class="Pay">
   <div class="columns">
     <div class="column is-4">
       <p class="title has-text-white">Support operational costs of Progressbar</p>
       <p class="title has-text-white">Our monthly rent is <a href="#">{{ funds.monthlyRentTax }}€</a>.
        Our account balance is <a href="#">{{ funds.balance }}€</a> at the moment.
        We are missing <a href="#">{{ funds.missingFunds }}€</a> for another month.
        If you like what we do, you can support our operations by donating 👇</p>
     </div>
     <div class="column is-4">
        <p class="title has-text-white">IBAN (€)</p>
        <p class="title has-text-white">{{donations.IBAN}}</p>
        <vue-qr
        :correctLevel="1"
        :text="`${donations.payBySquareIBAN}`"
        :size="300"
        :dotScale="1"
        ></vue-qr>
      </div>
      <div class="column is-4">
       <p class="title has-text-white">Ethereum, DAI</p>
       <p class="title has-text-white"><a :href='`ethereum:${donations.ethereum.to}`'>{{donations.ethereum.to}}</a></p>
       <vue-qr
        logoSrc="/static/img/partners/ethereum-1-logo-svg-vector.svg"
        :correctLevel="1"
        :logoScale="0.1"
        :text="`ethereum:${donations.ethereum.to}?value=${donations.ethereum.value}`"
        :size="300"
        :dotScale="1"
        ></vue-qr>
      </div>
   </div>
   <div class="columns">
     <div class="column is-4">
       <a :href='donations.kyber'
        class='button is-black is-block is-large meeting'
        name='KyberWidget - Powered by KyberNetwork'
        title='Pay with tokens'
        target='_blank'>Pay with tokens</a>
     </div>
     <div class="column is-4">
      <a :href='donations.kyber001'
        class='button is-black is-block is-large meeting'
        name='KyberWidget - Powered by KyberNetwork'
        title='Pay with tokens'
        target='_blank'>Pay 0.01 ETH with tokens</a>
     </div>
     <div class="column is-4 content">
       <h1>
        <a :href='donations.daicard'
          class='button is-black is-block is-large meeting'
        >$10 DAI via 💳DAICARD</a>
       </h1>
     </div>
   </div>
   <div class="columns">
      <div class="column is-4">
        <p class="title has-text-white">⚡️Lightning Network fan? <br>
          <a :href='donations.tippinme'>We are supporting LN too 😍</a></p>
        <div id="tippin-button" data-dest="progressbarsk"></div>
        <a :href='donations.tippinme'
        class='button is-black is-block is-large meeting'
        target='_blank'>Support with ⚡️LN</a>
      </div>
      <div class="column is-4">
        <p class="title has-text-white">₿itcoin <a :href='`bitcoin:${donations.bitcoin}`'>{{donations.bitcoin}}</a></p>
        <vue-qr
        logoSrc="/static/img/partners/Bitcoin.svg"
        :correctLevel="3"
        :logoScale="0.2"
        :text="`bitcoin:${donations.bitcoin}`"
        :size="300"
        :dotScale="1"
        ></vue-qr>
      </div>
      <div class="column is-4">
        <p class="title has-text-white">Łitecoin <a :href='`litecoin:${donations.litecoin}`'>{{donations.litecoin}}</a></p>
        <vue-qr
        logoSrc="/static/img/partners/Litecoin.svg"
        :correctLevel="3"
        :logoScale="0.2"
        :text="`litecoin:${donations.litecoin}`"
        :size="300"
        :dotScale="1"
        ></vue-qr>
      </div>
   </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name: 'Pay',
      data () {
        return {
          donations: {
            ethereum: {
              to: '0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e',
              value: '1.00e16'
            },
            litecoin: 'LSDNJopkWAgEuhrD1ucKiFD6ybhoEeTRWH',
            bitcoin: '1Eyo5FqY8pw5cWz97CZiozQAkZpznC2PCL',
            kyber: 'https://widget.kyber.network/v0.6.4/?type=pay&mode=tab&receiveAddr=0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e&receiveToken=ETH&paramForwarding=false&network=mainnet&pinnedTokens=ETH_DAI&theme=theme-dark',
            kyber001: 'https://widget.kyber.network/v0.6.4/?type=pay&mode=tab&receiveAddr=0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e&receiveToken=ETH&receiveAmount=0.01&paramForwarding=false&network=mainnet&pinnedTokens=ETH_DAI&theme=theme-dark',
            daicard: 'https://daicard.io/send?amountToken=10&recipient=0x0f86cf3aeb74be7e8da0dddb077b211c5dc2e1b9',
            tippinme: 'https://tippin.me/@progressbarsk',
            payBySquareIBAN: '000480008CJTMRAMA3I6P6R4KVN7ATUUAK74O98I8LDHC01G3FD9482M011LGCK2CVB619K969OBKGL8CSHPPKT60B5LL1FI0000',
            IBAN: 'SK1583300000002600121198'
          },
          href: {
            coworkGroup: 'https://t.me/coworkprogressbar',
            googleMapsProgressbar: 'https://goo.gl/maps/5Vgh7SUAL6N2',
            coworkerProgressbar: 'https://www.coworker.com/slovakia/bratislava/cowork-progressbar',
            facebookPageProgressbar: 'https://www.facebook.com/pg/progressbar/reviews/',
            instagram: 'https://www.instagram.com/progressbar_sk/',
            donate: 'https://donate.progressbar.sk'
          },
          donationAddress: '0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e',
          funds: {
            monthlyRentTax: 3768,
            missingFunds: 2431,
            balance: 1337
          }
      }
    },
    created() {
      this.getFunds();
    },
    methods: {
      getFunds() {
        axios({
          method: 'get',
          url: 'https://yangwao.api.stdlib.com/progressbar-cashflow@dev/'
        })
          .then(response => {
            // console.log(response)
            this.funds = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      }
    }

  }
</script>

<style>
  a {
    color: hotpink;
  }
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }
</style>
