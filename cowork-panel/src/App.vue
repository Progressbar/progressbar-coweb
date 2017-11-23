<template>
<div id="app">
  <header>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div class="crop">
          <a href="https://progressbar.sk">
            <img src="/static/img/progressbar-logo_sw.svg" alt="progressbar logo">
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

/*.crop {
    height: 150px;
    overflow: hidden;
    padding: 10px;
}

.crop img {
    margin: -150px 0 0 -10px;
}*/

.crop {
    /*width: 200px;*/
    height: 90px;
    overflow: hidden;
    padding: 10px;
}

.crop img {
    /*width: 400px;*/
    height: 200px;
    margin: -110px 0 0 -10px;
}

</style>
