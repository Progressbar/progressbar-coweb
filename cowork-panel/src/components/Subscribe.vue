<template>
<div class="subscribe">
  <div v-if="this.isUser" class="columns is-mobile is-centered">
    <div class="column is-narrow">
      <a href="./#/order" class="button is-warning is-large is-outlined">{{ this.button.order }}</a>
    </div>
  </div>
  <div class="columns">
    <div class="column is-parent is-8">
      <img src="/static/img/meetingroom/IMG_0963.jpg" alt="tech cowork bratislava meeting room">
      <img src="/static/img/IMG_1939.jpg" alt="progressbar cowork bratislava blockchain">
    </div>
    <div class="column is-parent is-4">
      <article class="tile is-child notification is-black is-size-4">
          <p class="title is-size-1">🧬 Cowork</p>
          <div class="content">
          <p>📍 <a href="https://goo.gl/maps/njvuE4mwmpz" alt="location of cowork">Downtown, Bratislava</a></p>
          <p>🤝 <router-link to="meeting-room-cowork-bratislava">Conferencing room for brainstorming and meeting clients</router-link> </p>
          <p>🔐 Private call room</p>
          <!-- <p>👀 Your <router-link to="/view">view</router-link></p> -->
          <p>⚡️  <a href="https://www.speedtest.net/result/7179888517" target="_blank">We have ultra-fast internet</a></p>
          <p>🖥 Shared monitors</p>
          <p>👷‍♀️ Standing desks</p>
          <p>🚴‍♀️ Bicycle parking U-rack</p>
          <p>❤️ Special offers for minorities</p>
          <p>💁‍♀️ On-site support </p>
          <!-- <p>📦 <a href="#" alt="Expecting a delivery while you're out? Don't worry. We can handover package to your table 🥰" > Postal and Package Handling</a></p> -->
          <p>📦 Postal and Package Handling</a></p>
          <p>🎶 Chromecast for projector and music</p>
          <p>🔧 Makerspace</p>
          <p>🏋️‍♂️ <a href="https://www.instagram.com/p/Bn5zmzJAa01/" target="_blank">Pull-up bar for you</a></p>
          <p>💰 We accept Bitcoin & Ethereum</p>
        </div>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-parent is-8">
      <img src="/static/img/IMG_1957.jpg" alt="progressbar cowork bratislava blockchain streetview">
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
  <!-- wao will rework this logic, soon™️ -->
  <!-- <div v-if="!this.isUser" class="columns is-centered">
    <div class="column is-narrow">
      <div class="control has-icons-left">
        <input v-model="subEmail" class="input is-medium is-white" type="email" placeholder="Enter your email">
        <span class="icon is-medium is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="column is-narrow">
      <a v-if="this.config.coworkSubscribe" @click="subscribeMe(subEmail)" class="button is-warning is-medium is-outlined">{{ this.button.subscribe }}</a>
      <a v-if="!this.config.coworkSubscribe" @click="subscribeMe(subEmail)" class="button is-warning is-medium is-outlined" disabled>{{ this.button.subscribe }}</a>
      <a v-if="this.config.coworkLogin" @click="sendLoginLink(subEmail)" class="button is-primary is-medium is-outlined">{{ this.button.login }}</a>
      <a v-if="!this.config.coworkLogin" @click="sendLoginLink(subEmail)" class="button is-primary is-medium is-outlined" disabled>{{ this.button.login }}</a>
    </div>
  </div> -->

  <h1 class="section-title title has-text-white has-text-centered">👩‍💻Membership👨‍💻</h1>

  <Offer />

  <h1 class="section-title title has-text-white has-text-centered">📸 Look inside</h1>

  <div class="columns is-centered">
    <div class="column is-6 contains-iframe-to-center">
      <iframe src="https://www.google.com/maps/embed?pb=!4v1546547834133!6m8!1m7!1sCAoSLEFGMVFpcFBGblRPNWdUbS1ZV1pLbjZzcE1HM3dFV0puVktQTVJNdWt0SmJn!2m2!1d48.14473611111111!2d17.11536666666667!3f1.0207673756391027!4f-13.53252497058756!5f0.7820865974627469" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="column is-6 contains-iframe-to-center">
      <iframe src="https://www.google.com/maps/embed?pb=!4v1546547760126!6m8!1m7!1sCAoSLEFGMVFpcE9WZ1JUNXhuUUx3NnV0SzFnR3IzWlFpcldQaGNhS3hmaEdpc1Zt!2m2!1d48.14473611111111!2d17.11536388888889!3f322.7183538152532!4f-11.882300608251754!5f0.7820865974627469" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
  <div class="columns">
    <div class="column is-parent is-8">
      <img src="/static/img/wide.jpg" alt="progressbar technology blockchain cowork bratislava">
    </div>
    <div class="column is-parent is-4">
      <article class="tile is-child notification is-black is-size-5">
        <div class="content">
          <p class="title">👨‍👩‍👧‍👧 Family Members</p>
          <div class="content">
            <p>👩‍🚀  Blockchain startups</p>
            <p>🧙‍♀️ Decentralization technology specialists</p>
            <p>👩‍🔬 Cryptocurrency techies & fanatics</p>
            <p>👩‍🎤 Backend & Frontend developers</p>
            <p>👩‍🎨 Machine learning developers</p>
            <p>🛰 Opensource developers</p>
            <p>👾 Cyberpunks & Cypherpunks</p>
            <p>🧝‍♀ Teachers, educators</p>
            <p>🧬 DIYBio supporters</p>
          </div>
        </div>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-parent is-8">
      <img src="/static/img/IMG_1951.jpg" alt="progressbar cowork bratislava blockchain meetup">
    </div>
    <div class="column is-parent is-4">
      <article class="tile is-child notification is-black is-size-5">
        <div class="content">
          <p class="title">⏳ Voyage Facilitation</p>
          <div class="content">
            <p></p>
            <p>Voyages are what we're about and we're ready to sail. If you have a team that would like to spend some time on our ship working towards your goals, please get in touch.
              We will demonstrate benchmark our success and clearly demonstrate the benefits of teams working on Progressbar.
              For now we really need to prove ourselves and are ready to offer heavily discounted rates.
              While your working on a voyage it's really easy to add some media coverage and document your work, or go on team building excursions for very little extra cost.</p>
          </div>
        </div>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-parent is-8">
      <img src="/static/img/meetingroom/IMG_0966.jpg" alt="meeting room cowork bratislava blockchain">
    </div>
    <div class="column is-parent is-4">
      <article class="tile is-child notification is-black is-size-5">
        <div class="content">
          <p class="title">👽 Solutions Consultancy</p>
          <div class="content">
            <p>
              We have lot of experience of running software and technology projects, and are happy to work with you to put together a team for almost anything.
              Drop us a line, we can discuss what you want to achieve and may be able to put together a proposal for how Progressbar can get you there.
              Consider us an A-team of tech wizards and innovation pirates.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-parent is-8">
      <div class="columns">
        <div class="column is-4">
          <a href="https://loomx.io/"><img src="/static/img/partners/loom_rgb-text-transparent-bg-square@4x.png" alt="loomx network sidechain"></a>
        </div>
        <div class="column is-4">
          <a href="https://ethereum.org"><img src="/static/img/partners/ethereum-logo.png" alt="ethereum blockchain"></a>
        </div>
        <div class="column is-4">
          <a href="https://ipfs.io"><img src="/static/img/partners/ipfs_2016-05-09-ipfs-3d-ice-text.png" alt="ipfs logo"></a>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <a href="https://nem.io"><img src="/static/img/partners/NEM-OFFICIAL-LOGO-white.png" alt="NEM foundation blockchain"></a>
        </div>
        <div class="column is-4">
          <a href="https://www.decent.ch"><img src="/static/img/partners/DECENT_logo_vertical_color.png" alt="decent blockchain"></a>
        </div>
        <div class="column is-4">
          <a href="https://www.scuttlebutt.nz"><img src="/static/img/partners/scuttlebutt.png" alt="scuttlebutt decentralized protocol"></a>
        </div>
      </div>
    </div>
    <div class="column is-parent is-4">
      <article class="tile is-child notification is-black is-size-5">
        <div class="content">
          <p class="title">🦄 Tech Ambassadors</p>
          <div class="content">
            <p>
              We endorse various blockchain a decentralization projects.
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
  <InstagramFeed />
  <cookie-law
    transitionName="fade"
    position="bottom"
    theme="dark-lime"
    buttonText="I understand"
  />
</div>
</template>

<script>
import axios from "axios";
import CookieLaw from "vue-cookie-law";
import Offer from "./Offer.vue";
import InstagramFeed from './InstagramFeed';

export default {
  name: "subscribe",
  data() {
    return {
      seats: {
        subscribers: 0,
        capacity: 0
      },
      bottledDrinks: [
        { name: 'Club-Mate,', image: '', url: '' },
        { name: 'Fritz-kola,', image: '', url: '' },
        { name: 'Mate-Mate,', image: '', url: '' },
        { name: 'Pragomost', image: '', url: '' },
      ],
      credited: 0,
      orderSum: {},
      newSubscriber: {
        email: ""
      },
      button: {
        subscribe: "Register for cowork",
        verify: "__",
        login: "Send login link",
        order: "Go to Dashboard"
      },
      daysBooked: 0,
      subEmail: "",
      isUser: false,
      config: {
        baseWebUrl: "https://progressbar.sk/",
        orderPrices: {
          day: 8,
          month: 100,
          fix: 180,
          locker: 10,
          nonstop: 20
        },
        openHours: {
          monthPass: {
            start: 6,
            end: 18
          },
          dayPass: {
            start: 9,
            end: 18
          }
        },
        coworkLogin: false,
        coworkSubscribe: false
      },
      isShowingCookieLaw: !CookieLaw.methods.getVisited() === true,
    };
  },
  components: {
    InstagramFeed,
    Offer,
    CookieLaw
  },
  created() {
    this.alreadyUser();
    this.getConfig();
  },
  methods: {
    alreadyUser() {
      if (this.$ls.get("user")) {
        this.isUser = true;
      }
    },
    getConfig() {
      axios({
        method: "get",
        url: this.$api.base + this.$api.pubConfig
      })
        .then(response => {
          // console.log(response)
          this.config = response.data;
          this.seats.capacity = response.data.seatCapacity;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getSubscribers() {
      axios({
        method: "get",
        url: this.$api.base + this.$api.subscribers
      })
        .then(response => {
          // console.log(response)
          this.seats = response.data.seats;
          this.orderSum = response.data.orderSum;
          this.daysBooked = response.data.daysBooked;
          this.config = response.data.config;
        })
        .catch(e => {
          console.log(e);
        });
    },
    async subscribeMe(email) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.$api.base}${this.$api.newSubscriber}`,
          params: {
            email
          }
        });
        this.button.subscribe = data.code;
      } catch (e) {
        console.error(e)
      }
    },
    sendLoginLink(email) {
      axios({
        method: "get",
        url: this.$api.base + this.$api.login,
        params: {
          email
        }
      })
        .then(response => {
          // console.log(response)
          this.button.subscribe = response.data.code;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
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

iframe {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  iframe {
    width: 85vw;
  }
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

.Cookie--dark-lime {
  background: #0a0a0a;
  padding: 0 1.250em 0 1.250em;
}

</style>
