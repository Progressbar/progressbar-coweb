<template>
<div class="residents">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/cowork/pb-08.jpg" alt="progressbar cowork bratislava blockchain">
        </figure>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-12">
      <article class="tile is-child notification is-black is-size-4">
        <p class="title">Selected Residents at Progressbar Family Office
        <p class="title">Crypto Startups</p>

        <div class="columns">
          <div class="column is-4" v-for="r in residents.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt">{{r.name}} </a>
          </div>
        </div>
        <p class="title">Social Impact</p>
        <div class="columns">
          <div class="column is-4" v-for="r in ngoResidents.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt">{{r.name}} </a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4" v-for="r in ngoResidents.slice(3,6)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt">{{r.name}} </a>
          </div>
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
  name: 'residents',
  data() {
    return {
      href: {
        iframes: [
          "https://www.google.com/maps/embed?pb=!4v1547309751764!6m8!1m7!1sCAoSLEFGMVFpcE9acVB5aEZUVmhySGZIUlFvbkNOSHVDcUlmRzVRWEhfbzR1ZmNo!2m2!1d48.14464166666667!2d17.11531388888889!3f330.8906939338204!4f-0.14140127506290412!5f0.4000000000000002"
        ],
        coworkGroup: 'https://t.me/coworkprogressbar'
      },
      residents: [
        {
          name: 'CrypKit',
          src: '/static/img/residents/crypkit-transparent.png',
          url: 'https://www.crypkit.com/',
          desc: ''
        },
        {
          name: 'BlockUnison',
          src: '/static/img/residents/blockunison.svg',
          url: 'https://blockunison.com/',
          desc: ''
        },
        {
          name: 'NKB Group',
          src: '',
          url: 'http://www.nkbgroup.io/',
          desc: ''
        }
      ],
      ngoResidents: [
        {
          name: 'RmBrK',
          src: '/static/img/residents/rmbrk.png',
          url: 'http://rmbrk.sk',
          desc: ''
        },
        {
          name: 'Cyklokoalicia',
          src: '/static/img/residents/cyklokoalicia_logo.svg',
          url: 'https://cyklokoalicia.sk/',
          desc: ''
        },
        {
          name: 'Whitebikes',
          src: '/static/img/residents/WhiteBikes_Logo.svg',
          url: 'https://whitebikes.info/',
          desc: ''
        },
        {
          name: 'Pre Stredoskolakov',
          src: '/static/img/residents/pre_stredoskolakov.jpg',
          url: 'http://prestredoskolakov.sk/',
          desc: ''
        }
      ]
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
