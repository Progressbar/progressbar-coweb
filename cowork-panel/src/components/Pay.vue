<template>
  <div class="Pay">
   <div class="columns">
     <div class="column is-4 is-offset-3">
       <p class="title has-text-white">Support operational costs of Progressbar</p>
       <p class="title has-text-white">Ethereum, DAI, ⚡️ LN</p>
       <p class="title has-text-white">{{donations.ethereum.to}}</p>
     </div>
     <div class="column is-4">
       <vue-qr
        logoSrc="/static/img/icons/android-launchericon-144-144.png"
        :correctLevel="3"
        :logoScale="0.5"
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
     <div class="column is-4 is-offset-4">
        <p class="title has-text-white">You are ⚡️Lightning Network fan? <a href="https://tippin.me/@progressbarsk">We are supporting LN too 😍</a></p>
        <div id="tippin-button" data-dest="progressbarsk"></div>
        <a :href='donations.tippinme'
        class='button is-black is-block is-large meeting'
        target='_blank'>Support with ⚡️LN</a>
      </div>
   </div>
  </div>
</template>

<script>
  export default {
      name: 'Pay',
      data () {
        return {
          donations: {
            ethereum: {
              to: '0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e',
              value: '1.00e16'
            },
            kyber: 'https://widget.kyber.network/v0.6.4/?type=pay&mode=tab&receiveAddr=0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e&receiveToken=ETH&paramForwarding=false&network=mainnet&pinnedTokens=ETH_DAI&theme=theme-dark',
            kyber001: 'https://widget.kyber.network/v0.6.4/?type=pay&mode=tab&receiveAddr=0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e&receiveToken=ETH&receiveAmount=0.01&paramForwarding=false&network=mainnet&pinnedTokens=ETH_DAI&theme=theme-dark',
            daicard: 'https://daicard.io/send?amountToken=10&recipient=0x0f86cf3aeb74be7e8da0dddb077b211c5dc2e1b9',
            tippinme: 'https://tippin.me/@progressbarsk'
          },
          href: {
            coworkGroup: 'https://t.me/coworkprogressbar',
            googleMapsProgressbar: 'https://goo.gl/maps/5Vgh7SUAL6N2',
            coworkerProgressbar: 'https://www.coworker.com/slovakia/bratislava/cowork-progressbar',
            facebookPageProgressbar: 'https://www.facebook.com/pg/progressbar/reviews/',
            instagram: 'https://www.instagram.com/progressbar_sk/',
            donate: 'https://donate.progressbar.sk'
          },
          donationAddress: '0x2a49d8d6dd59b35d613d8d569cd048bb3113e42e'
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
