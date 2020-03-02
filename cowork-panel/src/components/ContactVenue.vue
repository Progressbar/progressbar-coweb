<template>
<div class="Venue">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-5 content">
        <h2 class="has-text-white">
          📍 We are located on the first floor. <br />
          🚶‍♀️ You can access our space through grey doors next to the bike stand.<br />
          <br> 🚪 If you plan visit us during day, let us know in advance, so we can count on you.
          <br>
          <br> Before visit, <a href="https://t.me/coworkprogressbar">join our public telegram channel ahead </a> or <a href="mailto:info@progressbar.sk">contact us via email</a>.<br>
          See you soon 👋
        </h2>
      </div>
      <div class="column is-4 is-offset-2 content">
        <div class="columns">
          <div class="column is-12 content">
          <h1 class="has-text-white">
            📯Address - postal <br />
          </h1>
          <h3 class="has-text-white">
            Progressbar cowork & hackerspace,<br>
            Dunajská 7495/14,<br>
            811 08 Bratislava<br>
            Slovakia<br>
          </h3>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12 content">
          <h1 class="has-text-white">
            🧾 Billing details
          </h1>
          <h4 class="has-text-white">
            Progressbar o.z.<br>
            Dunajská 7495/14,<br>
            81108 Bratislava,<br>
            Slovenská republika<br>

            IČO: 42180023<br>
            DIČ: 2023612074<br>

            Registrované na MVSR zo dňa 15.7.2010 číslo spisu VVS/1-900/90-35964
          </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-12 content">
          <a href="https://www.openstreetmap.org/node/1096120193" target="_blank">Open Street Map</a>
          <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1133019,17z/data=!3m1!4b1!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906" target="_blank">Google Maps</a>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=17.113958001136783%2C48.143727459609195%2C17.116854786872867%2C48.14537578584775&amp;layer=mapnik&amp;marker=48.14455162934517%2C17.115406394004822"
          loading="lazy" style="border: 1px solid black"></iframe><br/>
        <div class="columns">
          <div class="tile is-vertical is-12">
            <div class="column contains-iframe-to-center" v-for="frame in href.iframes">
              <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';
export default {
  components: {
    ImageFrame,
  },
  name: 'Venue',
  metaInfo: {
    title: 'Contact & Address'
  },
  data() {
    return {
      href: {
        iframes: [
          'https://www.google.com/maps/embed?pb=!4v1582901663306!6m8!1m7!1s-gKR6kPv7nCGjQnZA3YY1w!2m2!1d48.1446918639937!2d17.11542692379906!3f165.52516117951566!4f-7.062132056435175!5f1.3653623366680616',
        ],
      }
    }
  }
}
</script>
<style>
a {
  color: hotpink;
}
</style>
