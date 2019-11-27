<template>
  <div class="Crowdfunding">
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-4">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child">
            <figure class="image">
              <img src="/static/img/crowdfunding/crowdfunding.jpg" alt="crowdfunding"/>
            </figure>
          </article>
        </div>
      </div>
    </div>
    <div class="tile is-parent is-size-5">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">💰 Crowdfunding</p>
          <div class="content">
            <p>Through crowdfunding we would like to do Progressbar Improvement Fund</p>
            <p>Progressbar is giving space to numerous meetups for free (150+meetups/year), but we need to pay for rent.
              Our cashflow now covers ⅔ of rent from cowork, rest is from meetups.</p>
            <p>We are missing resources for improvements in space to have quality space.</p>
            <p>For continuous improvements we need continuous funding to have better place and fix broken things.</p>
            <p>Things we'd like get funds for:</p>
            <p>📽 .8k€ - New projector 1080p to have vivid colours and better picture during meetups</p>
            <p>🧼 .1k€ - Hygienic dispensor to toilet - less unwanted bacteries on your hands</p>
            <p>🪑 .4k€ - New chairs to meeting room - our actuall chairs getting wonky</p>
            <p>♨️ .2k€ - Water heater to the kitchen - sometimes we wash things manually in hands</p>
            <p>🍛 .3k€ - Dishwasher - we have daily over 40 dirty 🥛</p>
            <p>🔇 1k3€ - Soundproofing of space for comfort during day stay</p>
            <p>📺 1k€ - Television on wheel for workshops</p>
            <p>📱 .3k€ - Phone for showing bookings on meeting room</p>
            <p>🌬 .5€ - Air ventilation in meeting room</p>
            <p>💬 5k€ - Another meeting room</p>
            <h1>
              <router-link to="/pay">
                To support our case, you can directly support us via donations
              </router-link>
            </h1>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
      name: 'Pay',
      metaInfo: {
        title: 'Crowdfunding | DAO 🙌',
      },
      data () {
        return {}
      }
    }
</script>

<style>
  .content h1 {
    color: hotpink;
  }
  a {
    color: hotpink;
  }
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }
</style>
