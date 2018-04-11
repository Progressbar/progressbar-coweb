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
        Bike stands on street - 🤞June
        Bike stands next to doors - 🤞end of April
        Air Intake - distribution of direct air current into room - 🤞mid-May
        Window mechanism - waiting for dates
        New electrical circuits & sockets on wall - waiting for price offer & for dates
        New tables - waiting for price offer (mid May)
        Tribune - price offer & dates (🤞end of May)
        Glass Meeting room - waiting for price offer & dates
        Hipster 🍰 Cakes in Black King Bar - mid April
        Hipster ☕️ coffe in Black King Bar - end of April
        Cryptocurrency ATM - paid, general bytes missing bank note dispenser (🤞beginning of May)
        Shower 🛀🚿 - n/a
        Kitchen 🥒 - n/a
        Spa & InfraSauna ??? - n/a
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
