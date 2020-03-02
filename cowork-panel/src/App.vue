<template>
<div id="app">
  <app-header />
  <app-body />
  <app-footer />
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppBody from '@/components/AppBody'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
  metaInfo: {
  title: 'Coworking Progressbar in Bratislava',
  titleTemplate: '%s | Place to work 🙌',
  },
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Exo+2'); */
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
  font-family: "Exo 2", sans-serif;
}

.Cookie--royal .Cookie__button {
  background: #423DDB !important;
}

.Cookie--royal .Cookie__buttons {
  margin-top: 0;
}
</style>
