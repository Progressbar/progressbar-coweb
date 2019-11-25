<template>
<div class="fixdesk">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/cowork/fixdesk.jpg" alt="fixdesk bratislava cowork downtown"/>
        </figure>
      </article>
    </div>
  </div>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="column contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
    </div>
    <div class="tile is-child is-parent">
      <Offer rangeStart=2
      rangeEnd=3 />
    </div>
  </div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';
import Offer from './Offer.vue';

export default {
  components: {
    ImageFrame,
    Offer
  },
  name: 'fixdesk',
  metaInfo: {
    title: 'Rent Fix Desk in Coworking Bratislava'
  },
  data() {
    return {
      href: {
        iframes: [
          'https://www.google.com/maps/embed?pb=!4v1573724301670!6m8!1m7!1sCAoSLEFGMVFpcE95LWZyQ3dfMHBJNnZGUzcwbHQ4dUZCSV9sd2FLTkEtaUZ3WTFO!2m2!1d48.1448919!2d17.1154158!3f114.32652478817094!4f-18.771614443283426!5f0.4000000000000002'
        ],
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
</style>
