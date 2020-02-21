<template>
<main>
  <section class="hero is-medium" v-if="['/'].includes($route.path)">
    <div class="hero-bg">
      <div class="hero-head"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                <progressbar-logo-refresh />
              </h1>
              <h2 class="subtitle">✨Your favourite tech coworking, community space and hangout zone in <a href="https://goo.gl/maps/gtmznEkBVGG2">downtown, Bratislava</a> 🪐</h2>
            </div>
            <div class="column">
              <div class="content has-text-centered">
                <p>
                  <a
                    class="button is-black is-large"
                    href="mailto:info@progressbar.sk?subject=I want to try Progressbar Cowork!"
                    target="_blank" rel="noopener">👩‍🔬 Join Coworking</a>
                </p>
                <p>
                  <router-link
                    class="button is-black is-large"
                    to="/rent-meeting-room-cowork-bratislava">
                    🤝 Meeting Room
                  </router-link>
                </p>
                <p>
                  <router-link
                    class="button is-black is-large"
                    to="/video"
                  >🎥 Recordings
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-body">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</main>
</template>

<script>
import ProgressbarLogoRefresh from '@/components/ProgressbarLogoRefresh.vue'

export default {
  name: 'app-body',
  components: {
    ProgressbarLogoRefresh
  },
}
</script>

<style scoped>
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/static/img/cowork/cowork_neons_IMG_20191111_191609.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-color: black;
}

.title {
  font-size: 3rem;
}

.title svg {
  max-width: 415px;
}

.subtitle {
  font-size: 1.5rem;
  /* font-weight: bold; */
}

.hero-body .title, .subtitle {
  color: white;
}

a.button, a.button:hover {
  border-color: white;
}

a {
  color: white;
  text-decoration: underline;
}
.section-body {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
