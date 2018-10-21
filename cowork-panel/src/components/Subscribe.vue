<template>
<div class="subscribe">
  <div v-if="this.isUser" class="columns is-mobile is-centered">
    <div class="column is-narrow">
      <a href="./#/order" class="button is-warning is-large is-outlined">{{ this.button.order }}</a>
    </div>
  </div>

  <h1 class="title has-text-white has-text-centered">Our space offers 🎁</h1>

  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-black">
            <p class="title">🧠 Coworking</p>
            <p class="subtitle">Located in downtown Bratislava. We accept Bitcoin, Ethereum & Litecoin!</p>
            <div class="content">
              <p>🤝 Meeting room and a call room (todo internal link)</p>
              <p>👀 Your view (todo addlink)</p>
              <p>⚡️ We have fast internet <a href="http://www.speedtest.net/result/7179888517" target="_blank">(~250/20)</a>, shared monitors and standing desks</p>
              <p>❤️ Special offers for minorities</p>
              <p>🎶 Chromecast for projector and music</p>
              <p>💪 <a href="https://www.instagram.com/p/Bn5zmzJAa01/" target="_blank">Pull-up bar</a></p>
              <p>🔧 Makerspace</p>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-black">
          <p class="title">🥤 Drinks</p>
          <!-- <p class="subtitle">Aligned with the right tile</p> -->
          <div class="content">
            <p>🍵 Tea (Matcha as well)</p>
            <p>
              🍼 Bottled and cooled drinks such as
              <span v-for="item in bottledDrinks" :key="item.name">
                {{item.name}}
              </span>
            </p>
            <p>
              ☕️ Specialty Coffee (black.xyz) and also coffee machine and frenchpress
            </p>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">📅 Events</p>
          <p class="subtitle">WIP waiting for omaksi</p>
          <div class="content">
            <!-- Content -->
          </div>
        </div>
      </article>
    </div>
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

  <h1 class="title has-text-white has-text-centered">🧠 Coworking</h1>

  <Offer />

  <h1 class="title has-text-white has-text-centered">📸 Photos</h1>

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

  <h1 class="title has-text-white has-text-centered">🐚 About Progressbar</h1>

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
        { name: 'Club-Mate, Flora-Power,', image: '', url: '' },
        { name: 'Fritz-kola,', image: '', url: '' },
        { name: 'Mana Roots,', image: '', url: '' },
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
