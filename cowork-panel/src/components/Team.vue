<template>
  <div class="Team">
    <div class="columns is-centered">
      <div class="column is-4 content has-text-white">
        <img width="180px" src="/static/img/team/matej_nemcek.jpg">
        <h3 class="has-text-white">
          Matej Nemček
        </h3>
        <p>
          Founder & Growth
        </p>
        <span class="social-icons" v-for="item in socialsYangwao" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener" class="social-icon" aria-hidden="true">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
          </a>
        </span>
      </div>
      <div class="column is-4 content has-text-white">
        <img width="180px" src="/static/img/team/anett_rolikova.jpg">
        <h3 class="has-text-white">
          Anett Rolikova
        </h3>
        <p>
          Operations & Partnerships
        </p>
        <span class="social-icons" v-for="item in socialsAnett" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener" class="social-icon" aria-hidden="true">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faInstagram,
  faFacebook,
  faTelegram,
  faFacebookMessenger,
  faTwitterSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
export default {
    name: 'Team',
    data () {
      return {
        href: {
          coworkGroup: 'https://t.me/coworkprogressbar',
          googleMapsProgressbar: 'https://goo.gl/maps/5Vgh7SUAL6N2',
          coworkerProgressbar: 'https://www.coworker.com/slovakia/bratislava/cowork-progressbar',
          facebookPageProgressbar: 'https://www.facebook.com/pg/progressbar/reviews/',
          instagram: 'https://www.instagram.com/progressbar_sk/'
        },
        socialsYangwao: [
          { url: 'https://www.instagram.com/yangwao', title: 'Instagram', icon: faInstagram },
          { url: 'https://www.linkedin.com/in/mnemcek/', title: 'Linkedin', icon: faLinkedin },
          { url: 'https://www.facebook.com/matej.wao.nemcek', title: 'Facebook', icon: faFacebook },
          { url: 'https://twitter.com/yangwao', title: 'Twitter', icon: faTwitterSquare },
          { url: 'https://t.me/yangwao', title: 'Telegram', icon: faTelegram },
          { url: 'https://m.me/matej.wao.nemcek', title: 'Messenger', icon: faFacebookMessenger }
        ],
        socialsAnett: [
          { url: 'https://www.instagram.com/anett.rolikova', title: 'Instagram', icon: faInstagram },
          { url: 'https://www.linkedin.com/in/anette-rolikova', title: 'Linkedin', icon: faLinkedin },
          { url: 'https://www.facebook.com/anett.rolikova', title: 'Facebook', icon: faFacebook },
          { url: 'https://twitter.com/anettrolikova', title: 'Twitter', icon: faTwitterSquare },
          { url: 'https://t.me/anettrolikova', title: 'Telegram', icon: faTelegram },
          { url: 'https://m.me/anett.rolikova', title: 'Messenger', icon: faFacebookMessenger }

        ]
    }
  }
}
</script>

<style scoped>

  @media only screen and (max-width: 768px) {
      iframe {
        width: 85vw;
      }
    }

    iframe {
      width: 100%;
    }

a.social-icon {
  color: hotpink;
}

.social-icons {
  font-size: 2.6em;
  padding: 0.1em;
}

.social-icons:hover {
  cursor: pointer;
}
</style>
