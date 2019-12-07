<template>
<div class="flexdesk">
  <div class="tile is-parent">
    <div class="tile is-vertical is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/cowork/cowork_team_roundtable.jpg" alt="team roundtable room cowork bratislava"/>
        </figure>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-4">
      <article class="tile">
        <figure class="image">
          <img src="/static/img/cowork/cowork_team_collaboration.jpg" alt="team collaboration room cowork bratislava"/>
        </figure>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile">
        <figure class="image">
          <img src="/static/img/cowork/cowork_team_meeting.jpg" alt="team meeting room cowork bratislava"/>
        </figure>
      </article>
    </div>
    <div class="tile is-child is-parent is-4">
      <Offer rangeStart=1 rangeEnd=2 />
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
import Offer from './Offer';

export default {
  components: {
    ImageFrame,
    Offer
  },
  name: 'flexdesk',
  metaInfo: {
    title: 'Rent Flex Desk in Coworking Bratislava'
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
