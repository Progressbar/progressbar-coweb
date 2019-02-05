<template>
<div class="fixdesk">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/wide.jpg" alt="fixdesk bratislava cowork"/>
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
      <div class="tile is-parent is-size-4" v-for="plan in plans.slice(2,3)">
        <article :class="{'is-highlighted': plan.highlight }" class="tile is-child notification is-black">
          <div class="content">
            <p v-if="plan.url" class="title is-size-3"><router-link :to='plan.url'>
              {{plan.name}}</router-link></p>
            <p v-else class="title is-size-3">{{plan.name}}</p>
            <div class="content">
              <p>{{plan.time}}</p>
              <p>{{plan.description[0]}}</p>
              <p>{{plan.description[1]}}</p>
              <p>{{plan.description[2]}}</p>
            </div>
          </div>
          <div class="btn-container">
            <a class="button is-black is-block is-large meeting"
              :href="href.coworkGroup">{{ plan.price }}€ / {{plan.period}}</a>
          </div>
        </article>
      </div>
  </div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';

export default {
  components: {
    ImageFrame
  },
  name: 'fixdesk',
  data() {
    return {
      href: {
        iframes: [
          "https://www.google.com/maps/embed?pb=!4v1547309751764!6m8!1m7!1sCAoSLEFGMVFpcE9acVB5aEZUVmhySGZIUlFvbkNOSHVDcUlmRzVRWEhfbzR1ZmNo!2m2!1d48.14464166666667!2d17.11531388888889!3f330.8906939338204!4f-0.14140127506290412!5f0.4000000000000002"
        ],
        coworkGroup: 'https://t.me/coworkprogressbar'
      },
      plans: [
        { name: 'Weekpass', time: '9 am ~ 6 pm ⏰', description:
          ['Available desk in space', 'Great for try out', 'Enjoy insider view'],
          price: '50', period: 'week' },
        { name: 'Flex', time: '6 am ~ 6 pm ⏰', description:
          ['Available desk in space', 'Great for longer stays 🏡', 'Support us remotely 💞'],
          price: '120',  period: 'month' },
        { name: 'Fixdesk', time: '24/7 🌃', description:
          ['Dedicated desk & chair', '♾ meeting room hours', '180cm long desk'],
          price: '200', period: 'month', highlight: 'true'},
        { name: 'Meeting Room 🤝', time: 'Acoustically isolated', description:
          ['10 seats','Whiteboard', 'Projector 📽 '], price: '10', period: 'hour',
          url: '/meeting-room-cowork-bratislava' }
      ],
      orderPrices: {
        fixdesk: 200
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
