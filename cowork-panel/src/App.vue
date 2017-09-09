<template>
  <div id="app">
    <header>
      <span>Progressbar cowork panel</span>
    </header>
    <main>
      <status></status>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '~bulma/css/bulma.css';
@import '~font-awesome/css/font-awesome.css';

html {
    background-color: #000
}
</style>
