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
              <font-awesome-icon v-if="social.icon" :icon="social.icon" /> {{social.title}}
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
        <h1>Contact</h1>
        <ul>
          <li v-for="contact in contacts">
            <a :href="contact.url" target="_blank">
              <font-awesome-icon v-if="contact.icon" :icon="contact.icon" /> {{contact.title}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <small>
          Dunajská 7495/14, Bratislava, 811 08, Slovakia
          (<a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1133019,17z/data=!3m1!4b1!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906" target="_blank">Google Maps</a>, )
        </small>
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
        { url: 'https://github.com/Progressbar/Progressbar-Improvement-Proposal/issues', title: 'Progressbar Improvement Proposal', icon: '' },
        { url: 'https://github.com/Progressbar/space-map/blob/master/map.png', title: 'Blueprint', icon: '' },
        { url: 'https://github.com/Progressbar/culture', title: 'Culture', icon: '' },
        { url: 'https://github.com/Progressbar/presskit', title: 'Presskit', icon: '' },
      ],
      projects: [
        { url: 'https://github.com/Progressbar/diybiobratislava', title: 'DIYBio Bratislava', icon: '' },
        { url: 'http://noodles.digital', title: 'Noodles Digital', icon: '' }
      ]
    }
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
a:hover {
  color: inherit;
  text-decoration: underline;
}
.column h1 {
  font-size: 1.3rem;
}
</style>
