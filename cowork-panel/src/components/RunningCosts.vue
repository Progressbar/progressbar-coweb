<template>
<div class="RunningCosts">
  <div class="container">
    <pb-financial-report />
  </div>
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-8 content">
        <h1 class="title has-text-grey-light is-size-1">
          Running costs
        </h1>
        <img src="/static/img/tribune.jpg" alt="tribune" />
        <p class="has-text-grey-light is-size-3" v-for="line of content">{{line}}</p>
        <h1 class="has-text-grey-light is-uppercase">Our running costs are following:</h1>
        <h4 class="has-text-grey-light is-size-4" v-for="line of costs">{{line}}</h4>
        </p>
        <img src="/static/img/meeting_room.jpg" alt="meeting room" />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import PbFinancialReport from '@/components/PbFinancialReport.vue'

export default {
  name: 'RunningCosts',
  components: {
    PbFinancialReport
  },
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
        Space Rent & Maintenance ~ 3800€ / mo
        Lemonades & Drinks ~ 600€ /mo
        Planned Hosts payroll ~ 1300€ /mo

        One time costs:
        Glass Meeting Room (for 12 people) costed us ~ 6000€.
        Cinema-seating (cover over stairs) will cost us ~ 7000€.
        Kitchen will costs us ~ 1000€.
      `
      .trim()
      .split('\n')
      .map((line) => line.trim())
    }
  }
}
</script>
<style scoped>
</style>
