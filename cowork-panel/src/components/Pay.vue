<template>
  <div class="Pay">
   <div class="columns">
     <div class="column is-12">
       <p class="title has-text-white">Support operational costs of Progressbar</p>
       <vue-qr logoSrc="/static/img/icons/android-launchericon-144-144.png"
        :text="`ethereum: ${donations.ethereum.to}?value=${donations.ethereum.value}`"
        :size="300"
        :dotScale="1"></vue-qr>
     </div>
   </div>
   <div class="columns">
     <div class="column is-12">
       <a href="https://daicard.io/send?amountToken=10&recipient=0x0f86cf3aeb74be7e8da0dddb077b211c5dc2e1b9">Donate $10 DAI through DAICARD</a>
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
              value: 0.01
            }
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
</style>
