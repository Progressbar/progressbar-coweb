<template>
<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <h1>🥥 Add us on socials 🦠</h1>
        <span class="social-icons" v-for="item in socials" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener" class="social-icon" aria-hidden="true">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
          </a>
        </span>
      </div>
      <div class="column is-3">
        <h1>You can find us on</h1>
        <p>Dunajská 7495/14</p>
        <p>811 08, Bratislava</p>
        <p>Slovakia 🇸🇰</p>
        <div v-for="item in mapUrls" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener">{{item.title}}</a>
        </div>
      </div>
      <div class="column is-6">
        <div class="content">
        <p class="title has-text-white">🐚 Progressbar story</p>
        <ul>
          <li>
            We started as <a href="https://progressbar.sk">first Slovak hackerspace</a> back in June 2010,
            this is our 4th place as we went through expansion and <a href="https://progressbar.sk/calendar">held more than 1000 meetups</a>.
          </li>
          <li>
            In September 2017 we considered to keep up our 💸 cashflow & our existence and started thinking about daily utilization.
            We came up with idea to open <a href="https://t.me/coworkprogressbar">coworking</a> in our hackerspace Progressbar in Bratislava.
          </li>
          <li>
            If you think we are doing great thing
            <ul>
              <li>
                you can support us at <a href="https://donate.progressbar.sk" target="_blank" rel="noopener">donate.progressbar.sk</a>
              </li>
              <li>
                  signup for our <a href="https://t.me/coworkprogressbar">coworking in Bratislava</a>
              </li>
              <li>
                <router-link to="/sponsors">be our proud sponsor</router-link>
              </li>
            </ul>
          </li>
        </ul>
        </div>
      </div>
      <!-- TODO: ADD GOOGLE MAP LIKE MAP :D -->
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <small><a href="https://github.com/Progressbar/progressbar-coweb" target="_blank" rel="noopener">/src</a> (Feel free to help ❤️)</small>
      </div>
      <div class="column is-6 has-text-right">
        <small aria-label="copyright">2010 - {{currentYear}} © Progressbar</small>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
import SupportUs from '@/components/SupportUs'
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTelegram,
  faFacebookMessenger,
faGit,
} from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'app-footer',
  components: {
    SupportUs
  },
  data () {
    return {
      currentYear: new Date().getFullYear(),
      contacts: [
        { url: 'https://t.me/coworkprogressbar', title: 'Telegram', icon: faTelegram },
        { url: 'mailto:info@progressbar.sk', title: 'info@progressbar.sk' },
        { url: 'https://m.me/progressbar', title: 'Messenger', icon: faFacebookMessenger }
      ],
      socials: [
        { url: 'https://www.facebook.com/progressbar', title: 'Facebook', icon: faFacebook },
        { url: 'https://www.instagram.com/progressbar_sk', title: 'Instagram', icon: faInstagram },
        { url: 'https://github.com/Progressbar', title: 'Github', icon: faGithub },
        { url: 'https://t.me/coworkprogressbar', title: 'Telegram', icon: faTelegram },
        { url: 'https://m.me/progressbar', title: 'Messenger', icon: faFacebookMessenger }
      ],
      internals: [
        { url: 'https://github.com/Progressbar/Progressbar-Improvement-Proposal/issues', title: 'Progressbar Improvement Proposal', icon: faGithub },
        { url: 'https://github.com/Progressbar/space-map/blob/master/map.png', title: 'Blueprint', icon: faGithub },
        { url: 'https://github.com/Progressbar/culture', title: 'Culture', icon: faGithub },
        { url: 'https://github.com/Progressbar/presskit', title: 'Presskit', icon: faGithub },
      ],
      projects: [
        { url: 'https://github.com/Progressbar/diybiobratislava', title: 'DIYBio Bratislava', icon: '' },
        { url: 'https://noodles.digital', title: 'Noodles Digital', icon: '' }
      ],
      // TODO: ADD HERE MAP LINK
      // TODO: ADD APPLE MAP LINK
      mapUrls: [
        { url: 'https://www.openstreetmap.org/node/1096120193', title: 'Open Street Map', icon: '' },
        { url: 'https://goo.gl/maps/piJwx6AAB762', title: 'Google Maps', icon: '' }
      ]
    }
  }
}
</script>
<style scoped>
.footer {
  background-color: inherit;
  color: white;
}
.column a.button {
  margin: 2px;
}
a svg {
  margin-right: 2px;
}
a:hover {
  color: inherit;
  text-decoration: underline;
}

a {
  color: hotpink;
}

a.social-icon {
  color: white;
}
a.social-icon:hover {
  color: hotpink;
}

.column h1 {
  font-weight: bold;
  font-size: 1.3rem;
}

  .social-icons {
    font-size: 2.6em;
    padding: 0.1em;
  }

.social-icons:hover {
  cursor: pointer;
}
</style>
