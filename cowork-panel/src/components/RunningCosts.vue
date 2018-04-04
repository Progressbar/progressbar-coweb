<template>
<div class="RunningCosts">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-6 content">
        <h1 class="title has-text-grey-light">
          Running costs
        </h1>
        <img src="/static/img/tribune.jpg" alt="tribune" />
        <p class="has-text-grey-light" v-for="line of content">{{line}}</p>
        <h2 class="has-text-grey-light is-uppercase">Our running costs are following:</h2>
        <h4 class="has-text-grey-light" v-for="line of costs">{{line}}</h4>
        </p>
        <img src="/static/img/meeting_room.jpg" alt="meeting room" />
        <p class="has-text-white">
          You can support us by sending funds via <a href="https://donate.progressbar.sk">donate.progressbar.sk</a>
          <br /> You can contact us via email or messenger
        </p>
        <p><br />
          <a class="button is-info is-medium is-outlined" href="mailto:info@progressbar.sk">info@progressbar.sk</a>
          <a class="button is-info is-medium is-outlined" href="https://m.me/progressbar">Contact us via ⚡️Messenger</a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'RunningCosts',
  data() {
    return {
      content: `
        Our venue is 231 m² in Dunajska 14, at the heart of Bratislava. The space can comfortably accomodate 80 people.

        As a non-profit that cares about technology, we try to incentivize tech communities in Bratislava, by allowing them to use the venue for free for their events.
        As a non-profit that needs to pay rent and bills, we also need funding! Any donations are welcome. Without donations, we won't be able too keep the familiar hackerspace spirit a lot of people in Bratislava are seeking, and offer these kinds of services
      `
      .trim()
      .split('\n')
      .map((line) => line.trim()),
      costs: `
        Space Rent is ~ 3600€ / mo
        Lemonades & Drinks ~ 800€ /mo
        Planned host costs ~ 800€ /mo

        One time costs:
        New tables will cost us ~ 4000€.
        Tribune (cover over stairs) will cost us ~ 6000€.
        Glass meeting room will costs us ~ 4000€.
        Kitchen will costs us ~ 2000€.
        Shower will costs us ~ 1000€.
      `
      .trim()
      .split('\n')
      .map((line) => line.trim())
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
