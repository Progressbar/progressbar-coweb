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
      const count = window.innerWidth > 1215 ? 3 : 4;
      const url = `https://wt-4665476769bf9081da4dd878527b9c7d-0.sandbox.auth0-extend.com/pb-web-ig?count=${count}`;
      axios({
        method: 'get',
        url
      })
        .then(response => {
          this.images = response.data.data;
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
    flex-flow: row wrap;
    justify-content: center;
  }


  img {
    height: 22em !important;
    margin: 1em;
    object-fit: cover;
    width: 22em !important;
  }

  @media only screen and (max-width: 768px) {
    img {
      margin: 1em 0;
    }
  }

</style>
