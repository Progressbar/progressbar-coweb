<template>
<div id="app">
  <header>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item progressbar-logo-container" href="https://cowork.progressbar.sk">
          <div class="navbar-logo progressbar-logo" alt="progressbar logo">
          </div>
        </a>
        <div @click="showNav = !showNav" v-bind:class="{ 'is-active': showNav }" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div v-bind:class="{ 'is-active': showNav }" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a href="https://progressbar.sk/calendar">Upcoming Meetups</a>
          </div>
          <div class="navbar-item">
            <a href="https://www.facebook.com/progressbar">Facebook</a>
          </div>
          <div class="navbar-item">
            <a href="https://t.me/coworkprogressbar">Telegram</a>
          </div>
          <div class="navbar-item">
            <router-link to="/space-for-rent">Space for Rent & Events</router-link>
          </div>
          <div class="navbar-item">
            <a href="https://m.me/progressbar">Contact us via ⚡️Messenger</a>
          </div>
          <div v-bind:class="{ 'is-active': MiscButtonIsActive }" class="navbar-item has-dropdown">
            <a @click='MiscButtonToggle()' class="navbar-link">
              Others
            </a>
            <div class="navbar-dropdown is-right">
              <a class="dropdown-item" href="https://donate.progressbar.sk">💰 Donate Progressbar</a>
              <router-link to="/running-costs" @click.native="showNav = !showNav"><a class="dropdown-item">
                Running costs</a></router-link>
              <router-link to="/venue" @click.native="showNav = !showNav"><a class="dropdown-item">
                Venue</a></router-link>
              <router-link to="/sponsors" @click.native="showNav = !showNav"><a class="dropdown-item">
                Sponsors</a></router-link>
              <router-link to="/call-for-the-sponsors" @click.native="showNav = !showNav"><a class="dropdown-item">
                Call for the Sponsors</a></router-link>
              <router-link to="/call-for-a-host" @click.native="showNav = !showNav"><a class="dropdown-item">
                Call for a Host</a></router-link>
                <hr class="navbar-divider">
              <a class="dropdown-item" href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1154906,3a,75y,0.9h,86.87t/data=!3m8!1e1!3m6!1sAF1QipNURKoHKNuKcFfvtybFoysAvtsQ870hhGEGxyqh!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNURKoHKNuKcFfvtybFoysAvtsQ870hhGEGxyqh%3Dw203-h100-k-no-pi-0-ya31.000006-ro-0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906" >
                Workspace VR Daylight (360)</a>
              <a class="dropdown-item" href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.144557,17.1154906,3a,75y,92.83h,78.38t/data=!3m8!1e1!3m6!1sAF1QipNPdefRErb2zp2wCMPCUEkOBJKDkcZcRn6ls4D0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNPdefRErb2zp2wCMPCUEkOBJKDkcZcRn6ls4D0%3Dw203-h100-k-no-pi0-ya0-ro0-fo100!7i8000!8i4000!4m5!3m4!1s0x476c8946152ff129:0x72ac0b6fccaf66fd!8m2!3d48.144557!4d17.1154906">
                Workspace VR Evening (360)</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </section>
  </main>
  <footer>
    <section class="section">
      <div class="container is-fluid">
        <SupportUs></SupportUs>
      </div>
    </section>
  </footer>
</div>
</template>
<script>
import SupportUs from '@/components/SupportUs'
export default {
  name: 'app',
  components: {
    SupportUs
  },
  data () {
    return {
      showNav: false,
      MiscButtonIsActive: false
    }
  },
  methods: {
    MiscButtonToggle: function(){
      this.MiscButtonIsActive = !this.MiscButtonIsActive
    }
  }
}
</script>
<style>
@import '~bulma/css/bulma.css';
@import '~font-awesome/css/font-awesome.css';

html {
  background-color: black;
}

.progressbar-logo-container {
  padding: 10px;
}
.progressbar-logo {
  width: 96px;
  height: 37px;
  mix-blend-mode: lighten;
  background-image: url('/static/img/progressbar-logo_sw.svg');
  background-position: 0 -141px;
  background-size: 96px 96px;
}

div.navbar-item a {
  color: white;
}

div.navbar-dropdown.is-right {
  background-color: black
}

</style>
