<template>
  <div class="subscribe">
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/making_movie_cowork.jpg" alt="coworking bratislava making movie">
        <img src="/static/img/cowork/women_coworkers.jpg" alt="progressbar women coworking bratislava blockchain">
        <img src="/static/img/meetingroom/waomeeting-01-4.jpg" alt="blockchain coworking bratislava meeting room">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-4">
          <h1 class="title is-size-1">🏕 Tech Coworking</h1>
          <div class="content">
            <p>📍 <a href="https://goo.gl/maps/njvuE4mwmpz" alt="location of coworking in Bratislava">Downtown, Bratislava</a></p>
            <p>🤝
              <router-link to="meeting-room-cowork-bratislava">Meeting rooms
              </router-link>
            </p>
            <p>🔐 Private call room</p>
            <p>💺
              <router-link to="rent-fix-desk-coworking-bratislava">
               Ergonomic quality chairs
              </router-link>
            </p>
            <p>💬 Hangout areas</p>
            <p>🌿
              <router-link to="rent-fix-desk-coworking-bratislava">
                Lot of plants
              </router-link>
            </p>
            <p>🖥 Shared monitors</p>
            <p>⚡️ Ultra-fast Internet</p>
            <p>👷‍♀️ Standing desks</p>
            <p>📦 <a href="#" title="Expecting a delivery while you're out?
              Don't worry. We can handover package to your table 🥰" > Package Handling</a></p>
            <p>🎯
              <router-link to="silent-place-to-work-in-bratislava">
              Space for focused work
              </router-link>
            </p>
            <p>🙌
              <router-link to="rent-flex-desk-coworking-bratislava">
              Space for collaborative work
              </router-link>
            </p>
            <p>🛋 Space for relaxation</p>
            <p>🍷 Community Social Events</p>
            <p>💁‍♀️ On-site support</p>
            <p>🥗 Lot of food options around</p>
            <p>🏋️‍♂️ <a href="https://www.instagram.com/p/Bn5zmzJAa01/" target="_blank" rel="noopener">Pull-up bar for
              you</a></p>
            <p>🚴‍♀️ Bicycle parking U-rack</p>
            <p>⛓ Crypto (BTC,ETH,..) 🥰</p>
            <p>💝 Special offers for minorities</p>
            <p>❄️ Air conditioning</p>
            <p>🔧 Makerspace</p>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/fixdesk_coworking_progressbar.jpg" alt="progressbar coworking bratislava blockchain area">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-4">
          <p class="title is-size-1">🥤 Drinks</p>
          <div class="content">
            <p>
              🍻 Bottled and cooled drinks such as
              <span v-for="item in bottledDrinks" :key="item.name">
              {{item.name}}
            </span>
            </p>
            <p>
              ☕️ Specialty Coffee and frenchpress
            </p>
            <p>
              🍵 Tea, Matcha
            </p>
          </div>
        </article>
      </div>
    </div>
    <h1 class="section-title title has-text-white has-text-centered">👩‍💻 Membership 👨‍💻</h1>
    <br>
    <Offer/>
    <br>
    <h1 class="section-title title has-text-white has-text-centered">🕵️‍♀️ Look inside</h1>
    <div class="columns is-centered">
      <div class="column is-6 contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
    </div>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/fixdesk.jpg" alt="coworking bratislava fixdesk progressbar technology blockchain">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-5">
          <div class="content">
            <p class="title">👨‍👩‍👧‍👧 Family Members</p>
            <div class="content">
              <p>👩‍🚀 Blockchain startups</p>
              <p>🧙‍♀️ Decentralization technology specialists</p>
              <p>👩‍🔬 Cryptocurrency techies & fanatics</p>
              <p>👩‍🎤 Backend & Frontend developers</p>
              <p>👩‍🎨 Machine learning developers</p>
              <p>👾 Cyberpunks & Cypherpunks</p>
              <p>🛰 Opensource developers</p>
              <p>🧝‍♀ Teachers, educators</p>
              <p>🧬 DIYBio supporters</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <techAmbassadors/>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/focus_room_coworking_bratislava.jpg" alt="progressbar coworking bratislava blockchain meetup">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-5">
          <div class="content">
            <p class="title">⏳ Voyage Facilitation</p>
            <div class="content">
              <p>Join us, meet interesting people and gain new information.
                Progressbar will give you space where you can work and learn by attending workshops and talks.
                You can rent a table and help create something big. We will be happy to help you with building your project.
                All it takes for you is to come and show what’s inside of you.
                Contact us for more information.
              </p>
              <h2 id="pinklink">
                <a href="mailto:info@progressbar.sk?subject=I want to try Progressbar Cowork!"
                target="_blank" rel="noopener">
                Join Progressbar, Tech Coworking in Bratislava</a>
              </h2>
            </div>
          </div>
        </article>
      </div>
    </div>
    <!-- <InstagramFeed/> -->
    <cookie-law
      transitionName="fade"
      position="bottom"
      theme="royal"
      buttonText="I understand"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import CookieLaw from 'vue-cookie-law';
  import Offer from './Offer.vue';
  // import InstagramFeed from './InstagramFeed';
  import ImageFrame from './ImageFrame';
  import techAmbassadors from './techAmbassadors';

  export default {
    name: 'subscribe',
    components: {
      ImageFrame,
      // InstagramFeed,
      Offer,
      CookieLaw,
      techAmbassadors
    },
    metaInfo: {
      title: 'Tech Coworking Progressbar in Bratislava'
    },
    data() {
      return {
        bottledDrinks: [
          {name: 'Club-Mate,', image: '', url: ''},
          {name: '🍺 Pilsner,', image: '', url: ''},
          {name: '🍷 Wine', image: '', url: ''},
        ],
        isUser: false,
        config: {
          baseWebUrl: 'https://progressbar.sk/',
          coworkLogin: false,
          coworkSubscribe: false
        },
        href: {
          iframes: [
            'https://www.google.com/maps/embed?pb=!4v1573724301670!6m8!1m7!1sCAoSLEFGMVFpcE95LWZyQ3dfMHBJNnZGUzcwbHQ4dUZCSV9sd2FLTkEtaUZ3WTFO!2m2!1d48.1448919!2d17.1154158!3f114.32652478817094!4f-18.771614443283426!5f0.4000000000000002',
            'https://www.google.com/maps/embed?pb=!4v1574673143863!6m8!1m7!1sCAoSLEFGMVFpcE82aGZTenBSUW9SV1JWTTc3Y3hYcDRFZTFaZ2d4NmFfZExZUjY4!2m2!1d48.1446417!2d17.1154389!3f83.27917026806618!4f-23.661244286869305!5f0.4000000000000002'
          ],
        },
        isShowingCookieLaw: !CookieLaw.methods.getVisited() === true,
      };
    },
  };
</script>

<style scoped>
  h1#blackh1 {
    color: black;
  }

  h2#blackh2 {
    color: black;
  }

  h2#pinklink {
    color: hotpink;
  }

  .pink {
    color: hotpink;
  }
/*
  .contains-iframe-to-center {
    text-align: center;
  }

  .card-content {
    padding: 1rem;
  }

  .content ul {
    list-style-type: square;
    margin-top: 0;
  }

  .section-title {
    margin-top: 1.5rem;
  }

  .notification {
    padding: 0;
  } */

  .Cookie--royal {
    color: #fff;
    background: #000;
    padding: 0 1.250em 0 1.250em;
  }

  a > img {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 768px) {
    a > img {
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
</style>
