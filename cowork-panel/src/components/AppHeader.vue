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
            <progressbar-logo-refresh/>
          </router-link>
          <div
            role="button"
            @click="toggleNav()"
            class="navbar-burger"
            aria-label="menu"
            :aria-expanded="showNav"
          >
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </div>
        </div>
        <div
          class="navbar-menu"
          v-bind:class="{ 'is-active': showNav }"
        >
          <div class="navbar-end">
            <div class="navbar-item is-size-4" @click="redirectToUrl(href.eventsfb)">
              Events
            </div>
            <router-link
              tag="div"
              class="navbar-item is-size-4"
              exact-active-class="is-active"
              to="/space-for-rent"
              v-on:click.native="toggleNav()"
            >
              Rent our space
            </router-link>
            <router-link
              tag="div"
              class="navbar-item is-size-4"
              exact-active-class="is-active"
              to="/meeting-room-cowork-bratislava"
              v-on:click.native="toggleNav()"
            >
              Meeting Room
            </router-link>
            <div class="navbar-item is-size-4" @click="redirectToUrl(href.coworkgroup)">
              Telegram
            </div>
            <div v-bind:class="{ 'is-active': MiscButtonIsActive }" class="navbar-item has-dropdown">
              <a
                @click='MiscButtonToggle()'
                class="navbar-link is-size-4"
              >
                Others
              </a>
              <div class="navbar-dropdown is-right">
                <a class="dropdown-item is-size-5" :href="href.donate" target="_blank" rel="noopener">💸 Donate to Progressbar</a>
                <router-link class="dropdown-item is-size-5" to="/running-costs" @click.native="toggleNav()">📒 Running
                  costs
                </router-link>
                <router-link class="dropdown-item is-size-5" to="/venue" @click.native="toggleNav()">🛸 Venue
                </router-link>
                <router-link class="dropdown-item is-size-5" to="/sponsors" @click.native="toggleNav()">🛰 Sponsors
                </router-link>
                <router-link class="dropdown-item is-size-5" to="/call-for-the-sponsors" @click.native="toggleNav()">🌈
                  Call for the Sponsors
                </router-link>
                <!-- <router-link class="dropdown-item is-size-5" to="/call-for-a-host" @click.native="toggleNav()">💜 Call
                  for an Angel -->
                </router-link>
                <hr class="navbar-divider">
                <router-link class="dropdown-item is-size-5" to="/give-us-review-thanks" @click.native="toggleNav()">👼 Give us Review</router-link>
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
    data() {
      return {
        href: {
          fixdesk: 'https://goo.gl/maps/sYsSt6e1uBE2',
          eventspace: 'https://goo.gl/maps/SghsZJzVPNs',
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
      MiscButtonToggle: function () {
        this.MiscButtonIsActive = !this.MiscButtonIsActive
      },
      toggleNav: function () {
        this.showNav = !this.showNav
      },
      redirectToUrl: function (url) {
        this.toggleNav();
        window.open(url, '_blank').focus();
      }
    }
  }
</script>

<style scoped>
  .progressbar-logo-container {
    color: white;
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

  a.navbar-link.is-size-4:hover {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  div.is-active > a {
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
