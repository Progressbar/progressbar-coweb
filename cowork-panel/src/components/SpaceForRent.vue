<template>
<div class="SpaceForRent">
  <div class="columns is-centered">
    <div class="column is-10 content">
      <h1 class="title has-text-white is-size-1">
        Venue for Rent & Your Events
      </h1>
      <img src="/static/img/eventspace/event_space_chairs.jpg" alt="meetup space in bratislava downtown" />
      <img src="/static/img/eventspace/IMG_20190404_172145_ps.jpg" alt="meetup space in bratislava downtown" />
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <p class="has-text-white is-size-3" v-for="line of content">{{line}}</p>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 contains-iframe-to-center" v-for="frame in href.iframes">
      <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-10 content">
      <img src="/static/img/eventspace/mlmu_april.jpg" alt="machine learning bratislava meetup" />
      <img src="/static/img/eventspace/IMG_20190327_190708_vedatour.jpg" alt="workshop for students" />
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <h1 class="title has-text-white">
        Equipment in our space for your event
      </h1>
      <ul class="has-text-white is-size-4" v-for="eq in equipment">
        <li>
          <p>{{eq}}</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-8 content">
      <h1 class="title has-text-white">
        <p>Interested hosting event in our venue? Contact us at <a href="mailto:info@progressbar.sk?Subject=Looking%20for%20venue%20for%20my%20event">info@progressbar.sk</a></p>
      </h1>
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
            🌈 You can support Progressbar through 👉 <router-link class="quote-link" to="/pay">https://cowork.progressbar.sk/pay</router-link><br>
            🌈 Check Progressbar Cowork in Downtown 👉 <a class="quote-link" href="https://cowork.progressbar.sk">https://cowork.progressbar.sk</a><br>
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
  name: 'SpaceForRent',
  components: {
    ImageFrame
  },
  data() {
    return {
      href: {
        iframes: [
          "https://www.google.com/maps/embed?pb=!4v1547477269492!6m8!1m7!1sCAoSLEFGMVFpcFBfRDIwTE9WUk4zRGNxN3F4Y1hjQXhFbTFQelByZjM3N0ZHdkJx!2m2!1d48.14464166666667!2d17.11531666666667!3f325.65868068001004!4f-12.108018640358523!5f0.4000000000000002"
        ]
      },
      equipment: [
        'We can scale up to 80 sitting spots',
        'We have for you fullHD (1080p) 📽 projector w/ Chromecast',
        'We have 🗣🎤 head microphone and 🎤 hand microphone with mixpult (Bluetooh input)',
        'We have video 📹 recording equipment for livestream',
        'We have high quality filtered water 🚰⛲️ for audience (UV lamp, carbon filter, antibacterial, reverse osmosis)',
        'We have A/C ❄️ for your event',
        'We have silent space for your event',
        'We have 2x 1000W speakers 🔊💥🙉',
        'For music we have ChromeCast Audio (play directly your Spotify playlist)',
      ],
      content: `
        Our venue is 231 m² in Dunajska 14, at the heart of Bratislava. The space can comfortably accomodate 80 people, but it can be expanded to up to 160 thanks to the bar right below.

        As a non-profit that cares about technology, we try to incentivize tech communities in Bratislava, by allowing them to use the venue for free for their events.
        As a non-profit that needs to pay rent and bills, we also need funding! Any donations are welcome. Without donations, we won't be able too keep the familiar hackerspace spirit a lot of people in Bratislava are seeking, and offer these kinds of services

        Our suggestion is a voluntary donation of 200€-400€ for every evening, depending on what you/your community can afford and how much you'll be using the space
        Thanks for the help! 👽🛰
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
