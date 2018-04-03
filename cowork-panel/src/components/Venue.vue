<template>
<div class="Venue">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-12 content">
        <p class="has-text-white">
          We are located over Black King Bar on first floor. You can access our space through doors next to Black King Bar. During event, ring bell Progressbar and probably somebody will open to you.
        </p>

        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=17.113958001136783%2C48.143727459609195%2C17.116854786872867%2C48.14537578584775&amp;layer=mapnik&amp;marker=48.14455162934517%2C17.115406394004822"
          style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=48.14455&amp;mlon=17.11541#map=19/48.14455/17.11541&amp;layers=N">View Larger Map</a></small>
        <p><a href="https://www.openstreetmap.org/node/1096120193">Progressbar at Openstreetmap</a></p>
        <p>
          <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1133019,17z/data=!3m1!4b1!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906">Progressbar at Google Maps</a>
        </p>
        <div class="columns">
          <div class="column is-3">
            <img src="/static/img/IMG_20180403_185405_1.jpg" alt="dunajska 14 progressbar" />
          </div>
          <div class="column is-8">
            <img src="/static/img/IMG_20180403_185456_HDR.jpg" alt="dunajska 14 progressbar" />
          </div>
        </div>
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
  name: 'Venue',
  data() {
    return {
      dummy: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
