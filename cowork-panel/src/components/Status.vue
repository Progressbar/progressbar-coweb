<template>
<div class="status">
      <div class="columns is-mobile">
            <div class="column is-narrow">
                  <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-white" type="email" placeholder="Status">
                        <span class="icon is-medium is-left">
                              <i class="fa fa-envelope"></i>
                        </span>
                        <!-- <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                </span> -->
                  </div>
            </div>
            <div class="column is-narrow">
              <a class="button is-light is-medium is-outlined">Subscribe me</a>
            </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'status',
  data() {
    return {
      msg: 'Welcome to Yo Vue.js PWA'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*@import '~bulma/css/bulma.css';*/
</style>
