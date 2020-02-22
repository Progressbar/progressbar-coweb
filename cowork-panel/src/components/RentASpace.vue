<template>
<div class="RentASpace">
  <div class="columns is-centered">
    <div class="column is-9 content">
      <h1 class="title has-text-white is-size-1">
        Rent A Space & Your Events
      </h1>
      <img src="/static/img/eventspace/event_space_chairs.jpg" alt="meetup space in bratislava downtown" />
      <img src="/static/img/eventspace/codebeer.jpg" alt="meetup space in bratislava downtown" />
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <p class="has-text-white is-size-3" v-for="line of content">
        <span v-html="line"></span>
      </p>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-9 content">
      <img src="/static/img/eventspace/mlmu_december.jpg" alt="machine learning bratislava meetup in coworking space" />
      <img src="/static/img/community/IMG_20191017_190905.jpg" alt="study group in coworking" />
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <h1 class="title has-text-white">
        Equipment in our space for your event
      </h1>
      <ul class="has-text-white is-size-4" v-for="eq in equipment">
        <li>
          <p><span v-html="eq"></span></p>
        </li>
      </ul>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <h1 class="title has-text-white">
        <p>For faster co-operation, <a hrref="https://docs.google.com/forms/d/e/1FAIpQLSeLgsx_pcVX_1KAFYENLmHk5pCJi-G-cTbdUsDQvsE5eSmHBw/viewform">please fill up form and tell us more about your event.</a></p>
        <p>Do you have any other questions about our venue? Contact us at
          <a href="mailto:info@progressbar.sk?Subject=Looking%20for%20venue%20for%20my%20event">info@progressbar.sk</a>,
          directly through <a href="https://m.me/progressbar">Facebook Messenger</a> or
          through our <a href="https://t.me/coworkprogressbar">Telegram channel</a></p>
      </h1>
    </div>
  </div>
  <div class="columns is-centered">
      <div class="column is-6 contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <h1 class="title has-text-white">
        If you're organizing an event in our space
      </h1>
      <ul class="has-text-white is-size-6">
      <li>
        <p>
          consider including this text in the description of your event:
        </p>
        <p>
          <blockquote class="quote-to-include-in-event has-text-white">
            🌈 You can support Progressbar 👉 <router-link class="quote-link" to="/pay">https://cowork.progressbar.sk/pay</router-link><br>
            🌈 Progressbar Coworking in Downtown 👉 <a class="quote-link" href="https://cowork.progressbar.sk">https://cowork.progressbar.sk</a><br>
            🌈 Join Our Cowork Channel on Telegram 👉 <a class="quote-link" href="https://t.me/coworkprogressbar">https://t.me/coworkprogressbar</a>
          </blockquote>
        </p>
      </li>
      <li>
        <p>
        if your event is on Facebook, send a "co-host" request to <a href="https://www.facebook.com/progressbar/" target="_blank">Progressbar</a> for greater pull and easier administration 🤗
        </p>
      </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import ImageFrame from './ImageFrame'

export default {
  name: 'RentASpace',
  components: {
    ImageFrame
  },
  metaInfo: {
    title: 'Rent venue space in downtown of Bratislava',
  },
  data() {
    return {
      href: {
        iframes: [
          'https://www.google.com/maps/embed?pb=!4v1574673143863!6m8!1m7!1sCAoSLEFGMVFpcE82aGZTenBSUW9SV1JWTTc3Y3hYcDRFZTFaZ2d4NmFfZExZUjY4!2m2!1d48.1446417!2d17.1154389!3f83.27917026806618!4f-23.661244286869305!5f0.4000000000000002',
          'https://www.google.com/maps/embed?pb=!4v1577004145072!6m8!1m7!1sCAoSLEFGMVFpcE83SkstZk5iTlFBMGpkeUxPTUdOV3RQWVJWU2U4OGxXLThfYnZv!2m2!1d48.1446028!2d17.11545!3f113.59398601677866!4f-14.131454593482772!5f0.7820865974627469',
        ]
      },
      equipment: [
        'We can scale up to 80 sitting spots',
        'We have for you fullHD (1080p) projector w/ Chromecast & HDMI 📽',
        'We have head microphone & hand microphone with mixpult 🎤',
        'We have video recording equipment for livestream. 📹 <a href="/video">Check our recordings.</a>',
        'We have high quality filtered water 🚰⛲️ for audience (UV lamp, carbon filter, antibacterial, reverse osmosis)',
        'We have A/C ❄️ for your event',
        'We have silent space for your event',
        'We have 2x 1000W speakers 🔊',
        'For music we have <b>ChromeCast Audio</b> (play directly your Spotify playlist)',
        'Extra Service - catering',
        'Available setups - theatre, learning session, custom'
      ],
      content: `
        Our venue is 231 m² in Dunajska 14, at the heart of Bratislava. The space can comfortably accomodate 80 people.

        As a non-profit that cares about technology, we try to incentivize tech communities in Bratislava, by allowing them to use the venue for free for their events.
        As a non-profit that needs to pay rent and bills, we also need funding!
        Any <b>donations are welcome.</b> Without donations, we won't be able too keep the familiar hackerspace spirit a lot of people in Bratislava are seeking, and offer these kinds of services.

        We average hold <b><a href="/place-for-your-community-meetup-in-bratislava">150+ events, meetups and workshops yearly.</a></b>

        Our suggestion is a voluntary donation of <b>200€-400€</b> for every evening, depending on what you/your community can afford and how much you'll be using the space.
        Thanks for the help! 🥰🙏
      `
      .trim()
      .split('\n')
      .map((line) => line.trim()),
    }
  }
}
</script>
<style scoped>
.pull-down {
  margin-top: 100px;
}
.quote-to-include-in-event {
  border-color: #29e;
  background-color: #0003;
}
.quote-link {
  text-decoration: underline;
}

a {
  color: hotpink;
}
</style>
