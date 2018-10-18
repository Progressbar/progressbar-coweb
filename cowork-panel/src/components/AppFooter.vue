<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <h1>Internals</h1>
          <ul>
            <li v-for="internal in internals">
              <a :href="internal.url" target="_blank">
                {{internal.title}}
              </a>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <h1>Social</h1>
          <ul>
            <li v-for="social in socials">
              <a :href="social.url" target="_blank">
                <font-awesome-icon :icon="social.icon" /> {{social.title}}
              </a>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <h1>Projects</h1>
          <ul>
            <li v-for="project in projects">
              <a :href="project.url" target="_blank">{{project.title}}</a>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          ifka
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <SupportUs></SupportUs>
    </div> -->
    <div class="container">
      <div class="columns">
        <div class="column is-12 has-text-right">
          <a v-for="contact in contacts" class="button is-info is-small is-outlined" :href="contact.url" target="_blank">
            <font-awesome-icon :icon="contact.icon" /> {{contact.title}}
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          Made with ❤️ by Progressbar members
        </div>
        <div class="column is-6 has-text-right">
          {{new Date().getFullYear()}} © Progressbar
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
} from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'AppFooter',
  components: {
    SupportUs
  },
  data () {
    return {
      contacts: [
        { url: 'mailto:info@progressbar.sk', title: 'info@progressbar.sk' },
        { url: 'https://m.me/progressbar', title: 'Messenger', icon: faFacebookMessenger },
        { url: 'https://t.me/coworkprogressbar', title: 'Telegram', icon: faTelegram }
      ],
      socials: [
        { url: 'https://www.facebook.com/progressbar', title: 'Facebook', icon: faFacebook },
        { url: 'https://www.instagram.com/progressbar_sk', title: 'Instagram', icon: faInstagram },
        { url: 'https://github.com/Progressbar/progressbar-coweb', title: 'Github', icon: faGithub }
      ],
      internals: [
        { url: 'https://github.com/Progressbar/culture', title: 'Culture', icon: '' },
        { url: 'https://github.com/Progressbar/presskit', title: 'Presskit', icon: '' },
        { url: 'https://github.com/Progressbar/Progressbar-Improvement-Proposal/issues', title: 'Ideas', icon: '' },
        { url: 'https://github.com/Progressbar/space-map/blob/master/map.png', title: 'Blueprint', icon: '' },
      ],
      projects: [
        { url: 'https://github.com/Progressbar/diybiobratislava', title: 'DIYBio Bratislava', icon: '' },
        { url: 'http://noodles.digital', title: 'Noodles Digital', icon: '' }
      ]
    }
  },
  methods: {
  }
}
</script>
<style>
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
</style>
