<template>

    <iframe rel="dns-prefetch" :src="this.url" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>

</template>

<script>
    export default {
        name: 'ImageFrame',
        props: ['url'],
    }
</script>

<style scoped>

  @media only screen and (max-width: 768px) {
    iframe {
      width: 85vw;
    }
  }

  iframe {
    width: 100%;
  }

</style>
