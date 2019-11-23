<template>
<div class="weekpass">
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="column contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
    </div>
      <div class="tile is-child is-parent">
      <Offer rangeStart=0 rangeEnd=1 />
    </div>
  </div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';
import Offer from './Offer';

export default {
  components: {
    ImageFrame,
    Offer
  },
  name: 'weekpass',
  metaInfo: {
    title: 'Week Pass Coworking in Bratislava'
  },
  data() {
    return {
      href: {
        iframes: [
          'https://www.google.com/maps/embed?pb=!4v1573755351347!6m8!1m7!1sCAoSLEFGMVFpcE4ySGpmX0RNUzg1WUJCZWNHMTBpd1lZSWRueXhNcnduVG9ZTVJl!2m2!1d48.1468639!2d17.1156119!3f12.82337781398069!4f-6.010588169657851!5f0.4000000000000002'
        ],
      },
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
