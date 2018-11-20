<template>
<header>
  <nav
    class="navbar is-black is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item progressbar-logo-container" to="/">
          <progressbar-logo-refresh />
        </router-link>
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
          <router-link
              tag="div"
              class="navbar-item"
              exact-active-class="is-active"
              to="/membership">
            Membership
          </router-link>
          <div class="navbar-item">
            <a
              href="https://www.facebook.com/progressbar/events"
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
              href="https://t.me/coworkprogressbar"
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
              <a class="dropdown-item" href="https://donate.progressbar.sk" target="_blank">💰 Donate to Progressbar</a>
              <router-link class="dropdown-item" to="/running-costs" @click.native="toggleNav()">📒 Running costs</router-link>
              <router-link class="dropdown-item" to="/venue" @click.native="toggleNav()">Venue</router-link>
              <router-link class="dropdown-item" to="/sponsors" @click.native="toggleNav()">😇 Sponsors</router-link>
              <router-link class="dropdown-item" to="/call-for-the-sponsors" @click.native="toggleNav()">Call for the Sponsors</router-link>
              <router-link class="dropdown-item" to="/call-for-a-host" @click.native="toggleNav()">Call for a Host</router-link>
              <hr class="navbar-divider">
              <a class="dropdown-item" :href="urls.day360" target="_blank">Workspace VR Daylight (360)</a>
              <a class="dropdown-item" :href="urls.night360" target="_blank">Workspace VR Evening (360)</a>
            </div>
          </div>
          <router-link
              tag="div"
              class="navbar-item is-uppercase"
              exact-active-class="is-active"
              to="/membership">
            Join us 🔥
          </router-link>
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
      urls: {
        day360: 'https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1154906,3a,75y,0.9h,86.87t/data=!3m8!1e1!3m6!1sAF1QipNURKoHKNuKcFfvtybFoysAvtsQ870hhGEGxyqh!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNURKoHKNuKcFfvtybFoysAvtsQ870hhGEGxyqh%3Dw203-h100-k-no-pi-0-ya31.000006-ro-0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906',
        night360: 'https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1154906,3a,75y,92.83h,78.38t/data=!3m8!1e1!3m6!1sAF1QipNPdefRErb2zp2wCMPCUEkOBJKDkcZcRn6ls4D0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNPdefRErb2zp2wCMPCUEkOBJKDkcZcRn6ls4D0%3Dw203-h100-k-no-pi0-ya0-ro0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906',
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
  color: white;
  cursor: pointer;
}

div.navbar-item a {
  color: white;
}

div.navbar-item:hover {
  background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  /* text-decoration: underline */
}

div.navbar-item.is-active {
  background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
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
