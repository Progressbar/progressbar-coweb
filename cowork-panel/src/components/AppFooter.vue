<template>
<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <h1>Internals</h1>
        <ul>
          <li v-for="item in internals" :key="item.url">
            <a :href="item.url" target="_blank">
              <font-awesome-icon v-if="item.icon" :icon="item.icon" /> {{item.title}}
            </a>
          </li>
        </ul>
      </div>
      <div class="column is-3">
        <h1>Social</h1>
        <ul>
          <li v-for="item in socials" :key="item.url">
            <a :href="item.url" target="_blank">
              <font-awesome-icon v-if="item.icon" :icon="item.icon" /> {{item.title}}
            </a>
          </li>
        </ul>
      </div>
      <div class="column is-3">
        <h1>Projects</h1>
        <ul>
          <li v-for="item in projects" :key="item.url">
            <a :href="item.url" target="_blank">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="column is-3">
        <h1>Contact</h1>
        <ul>
          <li v-for="item in contacts" :key="item.url">
            <a :href="item.url" target="_blank">
              <font-awesome-icon v-if="item.icon" :icon="item.icon" /> {{item.title}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        Dunajská 7495/14, Bratislava, 811 08, Slovakia
        (<a href="https://www.openstreetmap.org/node/1096120193" target="_blank">OSM</a>, <a href="https://goo.gl/maps/piJwx6AAB762" target="_blank">Google Maps</a>)
      </div>
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <small><a href="https://github.com/Progressbar/progressbar-coweb" target="_blank">/src</a> (Feel free to help ❤️)</small>
      </div>
      <div class="column is-6 has-text-right">
        <small aria-label="copyright">{{currentYear}} © Progressbar</small>
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
  name: 'AppFooter',
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
        { url: 'https://github.com/Progressbar', title: 'Github', icon: faGithub }
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
.column h1 {
  font-size: 1.3rem;
}
</style>
