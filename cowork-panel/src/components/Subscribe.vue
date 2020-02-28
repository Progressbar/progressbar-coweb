<template>
  <div class="subscribe">
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/making_movie_cowork.jpg" alt="coworking bratislava making movie">
        <img src="/static/img/cowork/women_coworkers.jpg" alt="progressbar women coworking bratislava blockchain">
        <img src="/static/img/meetingroom/spoznajkandidata.jpg" alt="blockchain coworking bratislava meeting room">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-4">
          <h1 class="title is-size-1">🏕 What's inside?</h1>
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
            <p> 🎧 Acoustically insulated space</p>
            <p>💬 Hangout areas</p>
            <p>🌿
              <router-link to="rent-fix-desk-coworking-bratislava">
                Lot of plants
              </router-link>
            </p>
            <p>🖥 Shared monitors</p>
            <p>👷‍♀️ Standing desks</p>
            <p>📦 <a href="#" title="Expecting a delivery while you're out?
              Don't worry. We can handover package to your table 🥰" > Package Handling</a></p>
            <p>⚡️ <a href="#" title="500/30 should be enough for your 4k video :)">
              Ultra-fast Internet</a>
              </p>
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
            <p>🍷
              <router-link to="place-for-your-community-meetup-in-bratislava">
                Community Social Events
              </router-link>
            </p>
            <p>💁‍♀️ On-site support</p>
            <p>🥗 <a href="https://www.google.com/maps/search/bratislava+restaurants/@48.145325,17.1097426,16z">
                Lot of food options around
                </a>
            </p>
            <p>🏋️‍♂️ <a href="https://www.instagram.com/p/Bn5zmzJAa01/" target="_blank" rel="noopener">Pull-up bar for
              you</a></p>
            <p>🚴‍♀️ Bicycle parking U-rack</p>
            <p>⛓ Crypto (BTC,ETH,..) 🥰</p>
            <p>💝 Special offers for minorities</p>
            <p>❄️ Air conditioning</p>
            <p>🔧 Makerspace</p>
            <p>📸 <a href="https://www.google.com/maps/place/Progressbar+Cowork+%26+Hackerspace/@48.1446824,17.115444,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMuwdWZFx-u2mWru0Oxj18w_r8GnbXJ5hxLKECP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMuwdWZFx-u2mWru0Oxj18w_r8GnbXJ5hxLKECP%3Dw203-h203-k-no!7i2736!8i2736!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.1445559!4d17.1154906">
              More photos</a></p>
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
    <div id="membership">
    </div>
    <br>
    <h1 class="title has-text-centered"><router-link to="/#membership">👩‍💻 Membership 👨‍💻</router-link></h1>
    <br>
    <div>
      <Offer/>
    </div>
    <br>
    <h1 class="section-title title has-text-white has-text-centered">🕵️‍♀️ Look inside</h1>
    <br>
    <div class="columns is-centered">
      <div class="column is-6 contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
    </div>
    <div id="testimonials">
    </div>
    <br>
    <div>
      <testimonials />
    </div>
    <br>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/fixdesk.jpg" alt="coworking bratislava fixdesk progressbar technology blockchain">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-4">
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
    <cherryResidents/>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/community/pyladies_meetup.jpg" alt="progressbar coworking bratislava python pyladies meetup">
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
  import cherryResidents from './CherryPickResidents';
  import testimonials from './Testimonials';

  export default {
    name: 'subscribe',
    components: {
      ImageFrame,
      // InstagramFeed,
      Offer,
      CookieLaw,
      testimonials,
      cherryResidents,

    },
    metaInfo: {
      title: 'Tech Coworking Progressbar in Bratislava'
    },
    data() {
      return {
        bottledDrinks: [
          {name: 'Club-Mate, Ulticha-Mate', image: '', url: ''},
          {name: '🍺 Pilsner, Svijany', image: '', url: ''},
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
            'https://www.google.com/maps/embed?pb=!4v1582794420833!6m8!1m7!1sCAoSLEFGMVFpcE0tQUthMUxyX0VpZFFiZDZXNWw1TWFsVnF6OXZWdURIZ2VQSjRO!2m2!1d48.1446!2d17.1155194!3f185.57885664003612!4f-14.516559923713345!5f0.4000000000000002',
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

  .title a {
    color: whitesmoke;
    text-decoration: underline;
  }

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
