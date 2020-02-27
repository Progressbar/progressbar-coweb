<template>
<div class="sponsors">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-8 content">
        <h1 class="title has-text-white">
          Call for Sponsors & Partners
        </h1>
        <img src="/static/img/eventspace/mlmu_december.jpg" alt="machine learning meetup bratislava in coworking" />
        <h2 class="subtitle has-text-white">
          <br />
          Progressbar Cowork & hackerspace is looking for sponsors & partners to help us with the space.
          We can offer to give our sponsors marketing push.<br>
          <br>
          We are in need to cover the costs of coworking equipment.<br>
          <br>
          The space capacity is about 80 people for meetups. Meetup organizators, contact us.<br>
          Technical meetups are preferred.<br>
          <br>
          We held 150+ meetups previous year with 5000+ attendees<br>
          <br>
          We can offer you to place your banner/rollup in our space.<br>
          We can put your company logo on our page.<br>
          <br>
          We have also <router-link to="/crowdfunding">campaign running</router-link><br>
          <br>
          We have sponsor tiers<br>
          <ol>
            <ul>
              45k€/year - Block producer<br>
              10k€/month - Governance vote<br>
              1k€/month - Buy me maté<br>
            </ul>
          </ol>
        </h2>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'CallForTheSponsors',
  metaInfo: {
    title: 'Sponsor Operations Costs and Sustainability',
  },
}
</script>
