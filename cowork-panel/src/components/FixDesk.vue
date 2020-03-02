<template>
<div class="fixdesk">
  <div class="tile is-parent">
    <div class="tile is-vertical is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/cowork/fixdesk.jpg" loading="lazy" alt="coworking bratislava fix desk"/>
        </figure>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-4">
      <article class="tile">
        <figure class="image">
          <img src="/static/img/cowork/cowork_team_collaboration.jpg" loading="lazy" alt="coworking bratislava team collaboration room"/>
        </figure>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile">
        <figure class="image">
          <img src="/static/img/community/IMG_20191023_182308.jpg" loading="lazy" alt="coworking bratislava team meeting room"/>
        </figure>
      </article>
    </div>
    <div class="tile is-child is-parent is-4">
      <Offer rangeStart=2 rangeEnd=3 />
    </div>
  </div>
  <div class="columns">
    <div class="tile is-vertical is-12">
      <div class="column contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
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
          'https://www.google.com/maps/embed?pb=!4v1582794420833!6m8!1m7!1sCAoSLEFGMVFpcE0tQUthMUxyX0VpZFFiZDZXNWw1TWFsVnF6OXZWdURIZ2VQSjRO!2m2!1d48.1446!2d17.1155194!3f185.57885664003612!4f-14.516559923713345!5f0.4000000000000002',
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
