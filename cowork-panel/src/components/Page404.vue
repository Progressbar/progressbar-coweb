<template>
<div class="Page404">
  <div class="container is-fluid">
    <div class="column is-10 content has-text-white">
      <h1 class="has-text-white">
        Looks like you've just found end of our coworking webpage.<br>
        You are <router-link to="/contact-venue">welcome to come over for free day pass 😋</router-link>
      </h1>
    </div>
    <Offer />
  </div>
</div>
</template>

<script>
import Offer from './Offer'
export default {
  components: {
    Offer
  },
  name: "Page404"
};
</script>
<style scoped>
a {
  color: hotpink;
}
</style>
