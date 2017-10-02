<template>
<div id="app">
      <header>
            <div class="columns">
                  <div class="column">
                        <div class="crop">
                              <a href="https://progressbar.sk">
                                    <img src="./assets/progressbar-logo.svg" alt="progressbar logo">
                              </a>
                        </div>
                  </div>
            </div>
      </header>
      <main>
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

.crop {
    height: 150px;
    overflow: hidden;
    padding: 10px;
}

.crop img {
    margin: -150px 0 0 -10px;
}
</style>
