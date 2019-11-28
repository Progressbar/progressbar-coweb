<template>
<div class="Page404">
  <div class="container is-fluid">
    <div class="columns is-10 content has-text-white">
      <div class="column is-8">
        <img src="/static/img/cowork/making_movie_cowork.jpg" alt="coworking bratislava making movie">
      </div>
      <div class="column is-4">
        <div class="content">
          <h1 class="has-text-white">
            <p>Looks like you've just found end of our coworking webpage.</p>
            <p>You are <router-link to="/contact-venue">welcome to come over for free day pass 😋</router-link></p>
          </h1>
          <p>🎯 Space for focused work</p>
          <p>🙌
            <router-link to="rent-flex-desk-coworking-bratislava">
            Space for collaborative work
            </router-link>
          </p>
          <p>🛋 Space for relaxation</p>
          <p>🍷 Community Social Events</p>
          <p>⚡️ Ultra-fast Internet</p>
          <p>💬 Hangout areas</p>
          <p>🔐 Private call room</p>
          <p>🤝
            <router-link to="meeting-room-cowork-bratislava">Meeting rooms
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <Offer />
  </div>
</div>
</template>

<script>
import Offer from './Offer'
export default {
  components: {
    Offer
  },
  name: "Page404"
};
</script>
<style scoped>
a {
  color: hotpink;
}
</style>
