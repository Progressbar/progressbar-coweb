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
        New electrical circuits & sockets on wall - waiting for dates
        Glass Meeting room - 3-5wks from confirmation (some complications occured)
        Cinema seating - price offer & dates (🤞end of May)
        New tables - waiting for price offer (mid May)
        Spread distribution of air intake into space (next to the wall & windows) - 🤞first week of May
        Bike stands on street - 🤞 June
        Big Fridge from FritzKola - 🤞 mid May
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
