<template>
<div class="SpaceForRent">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-8 content">
        <h1 class="title has-text-grey-light">
          Space for Rent & Events
        </h1>
        <img src="/static/img/IMG_20180324_092514_HDR.jpg" alt="nodeschool bratislava women edition" />
        <p class="has-text-grey-light" v-for="line of content">{{line}}</p>
        <img src="/static/img/PANO_20180324_103055.jpg" alt="nodeschool bratislava women edition" />
      </div>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-6 content">
      <h1 class="title has-text-grey-light">
        If you're organizing an event in our space
      </h1>
      <ol class="has-text-grey-light">
        <li>
          <p>
            consider including this text in the description of your event:
          </p>
          <p>
            <blockquote class="quote-to-include-in-event has-text-grey-light">
              You can support Progressbar through <a class="quote-link" href="https://donate.progressbar.sk">https://donate.progressbar.sk</a>,
              and check their cowork through <a class="quote-link" href="https://cowork.progressbar.sk">https://cowork.progressbar.sk</a>
            </blockquote>
          </p>
        </li>
        <li>
          <p>
          if your event is on Facebook, send a "co-host" request to <a href="https://www.facebook.com/progressbar/">Progressbar</a> for greater pull and easier administration 🤗
          </p>
        </li>
      </ol>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SpaceForRent',
  data() {
    return {
      content: `
        Our venue is 231 m² in Dunajska 14, at the heart of Bratislava. The space can comfortably accomodate 80 people, but it can be expanded to up to 160 thanks to the bar right below.

        As a non-profit that cares about technology, we try to incentivize tech communities in Bratislava, by allowing them to use the venue for free for their events.
        As a non-profit that needs to pay rent and bills, we also need funding! Any donations are welcome. Without donations, we won't be able too keep the familiar hackerspace spirit a lot of people in Bratislava are seeking, and offer these kinds of services

        Our suggestion is a voluntary donation of 20-60€ for every evening, depending on what you/your community can afford and how much you'll be using the space
        Thanks for the help!
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
</style>
