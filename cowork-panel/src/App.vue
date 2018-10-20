<template>
<div id="app">
  <AppHeader />
  <main>
    <section class="hero">
      <img src="/static/img/PANO_20180324_103055.jpg" alt="nodeschool bratislava women edition" />
      <div class="hero-body">
        Progressbar
      </div>
    </section>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </main>
  <AppFooter />
</div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'app',
  components: {
    AppFooter,
    AppHeader
  },
  data () {
    return {
      showNav: false,
      MiscButtonIsActive: false,
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
* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
html {
  background-color: black;
}
html,
body {
  /* font-family: "Open Sans", sans-serif; */
  font-family: "Titillium Web", sans-serif;
}
</style>
