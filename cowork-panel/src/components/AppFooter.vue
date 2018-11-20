<template>
<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <h1>Add us on ❤️</h1>
        <span class="social-icons" v-for="item in socials" :key="item.url">
          <font-awesome-icon v-if="item.icon" :icon="item.icon" />
        </span>
      </div>
      <div class="column is-3">
        <h1>You can find us on</h1>
        <p>Dunajská 7495/14</p>
        <p>811 08, Bratislava</p>
        <p>Slovakia 🇸🇰</p>
        <div v-for="item in mapUrls" :key="item.url">
          <a :href="item.url" target="_blank">{{item.title}}</a>
        </div>
      </div>
      <!-- TODO: ADD GOOGLE MAP LIKE MAP :D -->
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <small><a href="https://github.com/Progressbar/progressbar-coweb" target="_blank">/src</a> (Feel free to help ❤️)</small>
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
