<template>
<div class="subscribe">
  <div v-if="this.isUser" class="columns is-mobile is-centered">
    <div class="column is-narrow">
      <a href="./#/order" class="button is-warning is-large is-outlined">{{ this.button.order }}</a>
    </div>
  </div>

  <h1 class="title has-text-white">Our space offers 🎁</h1>

  <div class="columns">
    <div class="column is-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <router-link to="/membership">
              🏢 Coworking 👩‍🚀
            </router-link>
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>View</li>
              <li>
                <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1133019,17z/data=!3m1!4b1!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906" title="Dunajská 7495/14, 811 08 Bratislava, Slovakia" target="_blank">Place for your work in downtown</a>
              </li>
              <li>
                <a href="http://www.speedtest.net/result/7179888517" target="_blank">Fast Internet ~250/20</a>
              </li>
              <!-- <li>
                <a href="https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/21765459_1941520825863850_876389467015918658_o.jpg?oh=7de68da52211a7304d10a3298d7e02fc&oe=5A538F7E" target="_blank">Lot of Electric Sockets ⚡️🔌</a>
              </li> -->
              <li>
                <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442769,17.1065927,3a,75y,68.38h,60.45t/data=!3m8!1e1!3m6!1sAF1QipOS15iBvtp1oSLXg6nuorM282YC64pjorvA2LVk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOS15iBvtp1oSLXg6nuorM282YC64pjorvA2LVk%3Dw203-h100-k-no-pi-0-ya6.500005-ro-0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.1442784!4d17.1065933" title="1080p HDMI/DVI mostly" target="_blank">External Monitors - shared 🖥</a>
              </li>
              <li>
                <a href="http://www.ikea.com/sk/sk/catalog/products/S29084966/" title="IKEA SKARSTA">Standing desks</a>
              </li>
              <li>
                Chromecast for projector and music 🎶
              </li>
              <li>
                <router-link to="/space-for-rent">Meeting room 🤝</router-link>
              </li>
              <!-- <li>
                Private offices
              </li> -->
              <li>
                <a href="https://www.instagram.com/p/Bn5zmzJAa01/" target="_blank">Pull-Up bar 💪</a>
              </li>
              <li>Call room 📞</li>
              <li>
                Air Conditioning ❄️ 🔥
              </li>
              <li>
                Coding women get 50% off 👩🏽‍💻
              </li>
              <li>
                Bitcoin, Etherum & Litecoin accepted
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            🍻 Drinks 🥤
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                🍵 Tea (Matcha as well)
              </li>
              <li>
                <a href="https://www.facebook.com/progressbar/photos/a.946997141982895.1073741833.140864112596206/1933082956707637/?type=3" target="_blank" title="drinks in fridge">🍼 Bottled drinks </a> (cooled ️️❄️)
                <ul>
                  <li v-for="item in bottledDrinks" :key="item.name">
                    {{item.name}}
                  </li>
                </ul>
              </li>
              <li>
                ☕️ Specialty Coffee (<a href="https://black.xyz/" target="_blank">black.xyz</a>)
                <ul>
                  <li>Frenchpress</li>
                  <li>Coffee Machine</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <router-link to="/events">
              📅 Upcoming Events ⚡️
            </router-link>
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            Work in Progress(bar) 😉
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            💡 Progressbar Improvement Proposal 🔧
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            TODO use github api
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <div v-if="!this.isUser" class="columns is-centered">
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
  </div>

  <h1 class="title has-text-white">Coworking 🧠</h1>

  <Offer />

  <h1 class="title has-text-white">Photos 📸</h1>

  <div class="columns is-centered">
    <div class="column is-narrow contains-iframe-to-center">
      <iframe src="https://www.google.com/maps/embed?pb=!4v1521036389001!6m8!1m7!1sCAoSLEFGMVFpcE5VUktvSEtOdUtjRmZ2dHliRm95c0F2dHNRODcwaGhHRUd4eXFo!2m2!1d48.144557!2d17.1154906!3f0.9038775948851594!4f-3.1346220537675435!5f0.7820865974627469" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="column is-narrow contains-iframe-to-center">
      <iframe src="https://www.google.com/maps/embed?pb=!4v1520687181290!6m8!1m7!1sCAoSLEFGMVFpcE5DTFo1VDhUcXI3QkUtYjd2N2ZySmZWMGp4QjU2Y2poNC1qWXVW!2m2!1d48.144557!2d17.1154906!3f93.6033215859847!4f-8.0060330138093!5f0.7820865974627469" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>

  <div class="columns">
    <div class="column is-6">
      <img src="/static/img/wide.jpg" alt="progressbar technology cowork bratislava">
    </div>
    <div class="column is-6">
      <img src="/static/img/IMG_20180321_181247_HDR.jpg" alt="progressbar cowork bratislava blockchain meetup">
    </div>
  </div>

  <h1 class="title has-text-white">About Progressbar 🐚</h1>

  <div class="columns">
    <div class="column is-6">
      <article class="message is-black">
        <div class="message-header">
          <p>Our backlog story</p>
        </div>
        <div class="message-body">
          <div class="content">
            <ul>
              <li>
                We started as <a href="https://progressbar.sk">first Slovak hackerspace</a> back in June 2010, this is our 4th place as we went through expansion and <a href="https://progressbar.sk/calendar">held more and biggers meetups</a>.
              </li>
              <li>
                In September 2017 we considered to keep up our 💸 cashflow & our existence and started thinking about daily utilization. We came up with idea to open <strong>coworking</strong> in our hackerspace Progressbar in Bratislava.
              </li>
              <li>
                If you think we are doing great thing
                <ul>
                  <li>
                    you can support us at <a href="https://donate.progressbar.sk" target="_blank">donate.progressbar.sk</a>
                  </li>
                  <li>
                     signup for our <a href="https://progressbar.sk">coworking in Bratislava</a>
                  </li>
                  <li>
                    <router-link to="/sponsors"><a href="/#/sponsors">be our proud sponsor</a></router-link>
                  </li>
                </ul>
              </li>
              <li>
                👋🏼 You are welcome 🤗
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
    <div class="column is-6">
      <article class="message is-black">
        <div class="message-header">
          <p>Our coworkers are ~ 😎</p>
        </div>
        <div class="message-body">
          <div class="content">
            <ul>
              <li>
                Blockchain startups
              </li>
              <li>
                Decentralization technology specialists
              </li>
              <li>
                Cryptocurrency techies & fanatics
              </li>
              <li>Teachers, educators</li>
              <li>
                Backend & Frontend developers
              </li>
              <li>
                Machine learning developers
              </li>
              <li>
                Hardware tinkers
              </li>
              <li>
                Opensource developers
              </li>
              <li>
                Cyberpunks & Cypherpunks
              </li>
              <li>DIYBio supporters</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
  <cookie-law transitionName="fade"
   position="bottom"
   theme="dark-lime"
   buttonText="I understand"></cookie-law>
</div>
</template>

<script>
import axios from "axios";
import CookieLaw from "vue-cookie-law";
import Offer from "./Offer.vue";

export default {
  name: "subscribe",
  data() {
    return {
      seats: {
        subscribers: 0,
        capacity: 0
      },
      bottledDrinks: [
        { name: 'Club-Mate, Flora-Power', image: '', url: '' },
        { name: 'Fritz-kola', image: '', url: '' },
        { name: 'Mana Roots', image: '', url: '' },
        { name: 'Thomas Henry Mate-Mate', image: '', url: '' },
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
.card-content {
  padding: 1rem;
}
.content ul {
  list-style-type: square;
  margin-top: 0;
}
</style>
