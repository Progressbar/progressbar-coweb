<template>
<header>
  <nav
    class="navbar is-black is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item progressbar-logo-container" :href="href.homesite">
          <progressbar-logo-refresh />
        </a>
        <div
          role="button"
          @click="toggleNav()"
          class="navbar-burger"
          aria-label="menu"
          :aria-expanded="showNav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div
        class="navbar-menu"
        v-bind:class="{ 'is-active': showNav }"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <a
              :href="href.eventsfb"
              target="_blank"
            >Events</a>
          </div>
          <router-link
              tag="div"
              class="navbar-item"
              exact-active-class="is-active"
              to="/space-for-rent">
            Rent our space
          </router-link>
          <router-link
              tag="div"
              class="navbar-item"
              exact-active-class="is-active"
              to="/meeting-room-cowork-bratislava">
            Meeting Room
          </router-link>
          <div class="navbar-item">
            <a
              :href="href.coworkgroup"
              target="_blank">Telegram</a>
          </div>
          <div v-bind:class="{ 'is-active': MiscButtonIsActive }" class="navbar-item has-dropdown">
            <a
              @click='MiscButtonToggle()'
              class="navbar-link"
            >
              Others
            </a>
            <div class="navbar-dropdown is-right">
              <a class="dropdown-item" :href="href.donate" target="_blank">💰 Donate to Progressbar</a>
              <router-link class="dropdown-item" to="/running-costs" @click.native="toggleNav()">📒 Running costs</router-link>
              <router-link class="dropdown-item" to="/venue" @click.native="toggleNav()">👽 Venue</router-link>
              <router-link class="dropdown-item" to="/sponsors" @click.native="toggleNav()">😇 Sponsors</router-link>
              <router-link class="dropdown-item" to="/call-for-the-sponsors" @click.native="toggleNav()">🌈 Call for the Sponsors</router-link>
              <router-link class="dropdown-item" to="/call-for-a-host" @click.native="toggleNav()">💜 Call for a Angel</router-link>
              <hr class="navbar-divider">
              <a class="dropdown-item" :href="href.fixdesk" target="_blank">👀 360 Fixdesk</a>
              <a class="dropdown-item" :href="href.eventspace" target="_blank">👀 360 Eventspace</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
import ProgressbarLogoRefresh from '@/components/ProgressbarLogoRefresh.vue'

export default {
  name: 'app-header',
  components: {
    ProgressbarLogoRefresh,
  },
  props: {
    showLogo: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      href: {
        fixdesk: 'https://goo.gl/maps/SRwzooMfwjM2',
        eventspace: 'https://goo.gl/maps/aPZ3zwTLC4t',
        donate: 'https://donate.progressbar.sk',
        coworkgroup: 'https://t.me/coworkprogressbar',
        eventsfb: 'https://www.facebook.com/progressbar/events',
        homesite: 'https://cowork.progressbar.sk'
      },
      showNav: false,
      MiscButtonIsActive: false,
    }
  },
  methods: {
    MiscButtonToggle: function(){
      this.MiscButtonIsActive = !this.MiscButtonIsActive
    },
    toggleNav: function () {
      console.log('Toggle nav')
      this.showNav = !this.showNav
    }
  }
}
</script>

<style scoped>
.progressbar-logo-container {
  color: white;
}

.progressbar-logo-container:hover {
  transform: rotate(345deg);
}

.progressbar-logo-container svg {
  width: 115px;
}

.navbar-item {
  color: white
}

div.navbar-item a {
  color: white;
}

div.navbar-item:hover {
  background-color: black;
  /* text-decoration: underline */
}

div.navbar-item.is-active {
  background-color: black;
}

/* .navbar-item a:hover {
  text-decoration: underline;
} */

a.dropdown-item:hover {
  background-color: black;
  color: white;
  text-decoration: underline;
}

div.navbar-dropdown.is-right {
  background-color: black;
}

div.navbar-menu.is-active {
  background-color: black;
}
</style>
