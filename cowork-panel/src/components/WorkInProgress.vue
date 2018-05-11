<template>
<div class="WorkInProgress">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-10 content">
        <h1 class="title has-text-grey-light">
          Work In Progress
        </h1>
        <img src="/static/img/tribune.jpg" alt="tribune" />
        <h2 class="title has-text-grey-light">Behind the scenes</h2>
        <ul class="has-text-grey-light" v-for="line of wipItems">
          <li>
            {{line}}
          </li>
        </ul>
        <img src="/static/img/meeting_room.jpg" alt="meeting room" />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'WorkInProgress',
  data() {
    return {
      wipItems: `
        Glass Meeting room - confirmed! (🤞end of May)
        Cinema seating - price offer & dates (🤞half of June)
        New Electrical circuits & sockets on pillars - waiting for dates
        New Tables - waiting for price offer (mid May)
        Big Fridge from FritzKola - 🤞 mid May
        Bike stands on street - 🤞 June
        Hipster 🍰 Cakes in Black King Bar - end of April (ask for 🥕🍰, we already tasted it)
        Hipster ☕️ coffe in Black King Bar - end of April
        Shower 🛀🚿 - n/a
        Kitchen 🥒 - n/a
        Spa ♨️ & 🧖‍♀️ InfraSauna - n/a (who wants this, write @yangwao)
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
