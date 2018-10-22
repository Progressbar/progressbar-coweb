<template>
<div id="app">
  <app-header />
  <app-body />
  <app-footer />
</div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppBody from '@/components/AppBody'

export default {
  name: 'app',
  components: {
    AppFooter,
    AppBody,
    AppHeader,
  },
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
