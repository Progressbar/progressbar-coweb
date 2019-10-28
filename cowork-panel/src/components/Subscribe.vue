<template>
  <div class="subscribe">
    <div v-if="this.isUser" class="columns is-mobile is-centered">
      <div class="column is-narrow">
        <a href="./#/order" class="button is-warning is-large is-outlined">{{ this.button.order }}</a>
      </div>
    </div>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/pb-08.jpg" alt="progressbar cowork bratislava blockchain">
        <img src="/static/img/meetingroom/waomeeting-01-4.jpg" alt="blockchain cowork bratislava meeting room">
        <!-- <img src="/static/img/cowork/pb-07.jpg" alt="blockchain cowork bratislava meeting room"> -->

      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-4">
          <p class="title is-size-1">🏕 Cowork 🧚‍♂️</p>
          <div class="content">
            <p>📍 <a href="https://goo.gl/maps/njvuE4mwmpz" alt="location of cowork">Downtown, Bratislava</a></p>
            <p>🤝
              <router-link to="meeting-room-cowork-bratislava">Meeting rooms
              </router-link>
            </p>
            <p>🔐 Private call room</p>
            <p>💬 Hangout areas</p>
            <p>🌿 Lot of plants</p>
            <p>🖥 Shared monitors</p>
            <p>⚡️ Ultra-fast Internet</a></p>
            <p>👷‍♀️ Standing desks</p>
            <p>📦 <a href="#" title="Expecting a delivery while you're out?
              Don't worry. We can handover package to your table 🥰" > Package Handling</a></p>
            <p>💁‍♀️ On-site support </p>
            <p>🏋️‍♂️ <a href="https://www.instagram.com/p/Bn5zmzJAa01/" target="_blank" rel="noopener">Pull-up bar for
              you</a></p>
            <p>🚴‍♀️ Bicycle parking U-rack</p>
            <p>⛓ Crypto (BTC,ETH,..) positive</p>
            <p>❤️ Special offers for minorities</p>
            <p>❄️ Air conditioning</p>
            <p>🔧 Makerspace</p>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/IMG_20190125_005932.jpg" alt="progressbar cowork bratislava blockchain streetview">
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
              🍵 Tea
            </p>
          </div>
        </article>
      </div>
    </div>

    <h1 class="section-title title has-text-white has-text-centered">👩‍💻Membership👨‍💻</h1>

    <Offer/>

    <h1 class="section-title title has-text-white has-text-centered">📸 Look inside</h1>

    <div class="columns is-centered">
      <div class="column is-6 contains-iframe-to-center" v-for="frame in href.iframes">
        <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
      </div>
    </div>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/fixdesk.jpg" alt="progressbar technology blockchain cowork bratislava fixdesk">
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
    <div class="columns">
      <div class="column is-parent is-8">
        <div class="columns">
          <div class="column is-4" v-for="ambssador in techAmbassadors.slice(0,3)">
            <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4" v-for="ambssador in techAmbassadors.slice(3,6)">
            <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4" v-for="ambssador in techAmbassadors.slice(6,9)">
            <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4" v-for="ambssador in techAmbassadors.slice(9,12)">
            <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
          </div>
        </div>
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-5">
          <div class="content">
            <p class="title">🦄 Tech Ambassadors</p>
            <div class="content">
              <p>
                We endorse various blockchain and decentralization projects.
                We care about their community and trying to do best for their growth.
              </p>
              <p>We organize workshops and onboarding new people to use their tech.
                Want to be part of it? Contact us 💞
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column is-parent is-8">
        <img src="/static/img/cowork/pb-07.jpg" alt="progressbar cowork bratislava blockchain meetup">
      </div>
      <div class="column is-parent is-4">
        <article class="tile is-child notification is-black is-size-5">
          <div class="content">
            <p class="title">⏳ Voyage Facilitation</p>
            <div class="content">
              <p></p>
              <p>Join us, meet interesting people and gain new information.
                Progressbar will give you space where you can work and learn by attending workshops and talks.
                You can rent a table and help create something big. We will be happy to help you with building your project.
                All it takes for you is to come and show what’s inside of you.
                Contact us for more information.
              </p>
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

  export default {
    name: 'subscribe',
    components: {
      ImageFrame,
      // InstagramFeed,
      Offer,
      CookieLaw
    },
    data() {
      return {
        seats: {
          subscribers: 0,
          capacity: 0
        },
        bottledDrinks: [
          {name: 'Club-Mate,', image: '', url: ''},
          // {name: 'Fritz-kola,', image: '', url: ''},
          // {name: 'Pragomost,', image: '', url: ''},
          {name: 'Ultichá-Mate,', image: '', url: ''},
          {name: 'Matcha', image: '', url: ''},
        ],
        credited: 0,
        orderSum: {},
        newSubscriber: {
          email: ''
        },
        button: {
          subscribe: 'Register for cowork',
          verify: '__',
          login: 'Send login link',
          order: 'Go to Dashboard'
        },
        daysBooked: 0,
        subEmail: '',
        isUser: false,
        config: {
          baseWebUrl: 'https://progressbar.sk/',
          coworkLogin: false,
          coworkSubscribe: false
        },
        href: {

          iframes: [
            'https://www.google.com/maps/embed?pb=!4v1554902478405!6m8!1m7!1sCAoSLEFGMVFpcE1hdExZSUdQSDQyazJCRmpxU2lqdzVSak9kMnpfNXpERWlkX0lK!2m2!1d48.14460277777778!2d17.11545!3f117.82572902255863!4f-10.815697028043104!5f0.4000000000000002',
            'https://www.google.com/maps/embed?pb=!4v1554904059707!6m8!1m7!1sCAoSLEFGMVFpcFBrZjRMYkEyVmVlc3dFejVQTmo5SVVEM3BBWXE3LXdPT3EzMDdF!2m2!1d48.14460555555556!2d17.11545277777778!3f64.4619496828845!4f-16.166758599579396!5f0.4000000000000002'
          ],
        },
        techAmbassadors: [
          {
            url: 'https://loomx.io/',
            src: '/static/img/partners/loom_white.svg',
            alt: 'loomx network sidechain logo'
          },
          {
            url: 'https://ethereum.org',
            src: '/static/img/partners/ethereum-logo.png',
            alt: 'ethereum blockchain logo'
          },
          {
            url: 'https://www.scuttlebutt.nz',
            src: '/static/img/partners/secure_scuttlebutt.png',
            alt: 'secure scuttlebutt decentralized protocol logo'
          },
          // {
          //   url: 'https://www.decent.ch',
          //   src: '/static/img/partners/DECENT_logo_vertical_color.png',
          //   alt: 'decent blockchain logo'
          // },
          {
            url: 'https://ipfs.io',
            src: '/static/img/partners/ipfs_2016-05-09-ipfs-3d-ice-text.png',
            alt: 'ipfs logo'
          },
          {
            url: 'https://makerdao.com',
            src: '/static/img/partners/maker.svg',
            alt: 'maker logo'
          },
          {
            url: 'https://aragon.org',
            src: '/static/img/partners/aragon_vertical@2x.webp',
            alt: 'aragon logo'
          },
          {
            url: 'https://tezos.com/',
            src: '/static/img/partners/tezos_logo_white.png',
            alt: 'Tezos Foundation logo'
          },
          {
            url: 'https://cosmos.network',
            src: '/static/img/partners/cosmosnetwork.png',
            alt: 'Cosmos Network logo'
          },
          {
            url: 'https:///polkadot.network',
            src: '/static/img/partners/polkadotnetwork.svg',
            alt: 'Polkadot network logo'
          }
        ],
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
