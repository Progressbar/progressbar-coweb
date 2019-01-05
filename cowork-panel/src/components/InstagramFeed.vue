<template>
  <div class="image-holder">
    <span v-for="image in images" class="image">
      <img :src="image.images.standard_resolution.url">
    </span>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'InstagramFeed',
    data() {
      return {
        images: []
      }
    },
    mounted() {
      const count = 5;
      const url = `https://wt-4665476769bf9081da4dd878527b9c7d-0.sandbox.auth0-extend.com/pb-web-ig?count=${count}`
      axios({
        method: 'get',
        url
      })
        .then(response => {
          console.log('resp', response.data.data)
          this.images = response.data.data;
          // this.config = response.data;
          // this.seats.capacity = response.data.seatCapacity;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>
  div.image-holder {
    display: flex;
    justify-content: space-between;
  }

  img {
    height: 15em !important;
    width: 15em !important;
  }
</style>
