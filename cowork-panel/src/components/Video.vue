<template>
<div class="video">
  <div class="columns">
    <div class="column is-12 content">
    <p>
      <h1><a href="https://www.youtube.com/playlist?list=PLfCtn83lMV3BqBe45jgaNw4LqPNnhq6IG">Playlist of Archived Streams</a>
      <a href="https://www.youtube.com/channel/UCpun3Ro3aUJPoFVZwgqd98A">📥 Subscribe to Progressbar Channel</a></h1>
    <iframe class="mainiframe" height="800"
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PLfCtn83lMV3BqBe45jgaNw4LqPNnhq6IG"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    </div>
  </div>
  <div class="columns">
    <div class="column is-4">
      <article class="tile is-child notification is-black is-size-4">
        <div class="content">
          <p class="title">Want better quality? Same here.</p>
          <div class="content">
            <!-- <p>📍 Here is our plan:</p> -->
            <p>👼 Digital slides (200€+)</p>
            <p>🧠 Better audio quality (300€+)</p>
            <p>👩‍🎨 Better camera (600€+)</p>
            <p>📚 More camera angles (600€+/ks)</p>
            <p>🎧 General improvements (100€/)</p>
          </div>
          <div class="btn-container">
            <router-link class="button is-black is-block is-large meeting"
              to="/pay">
              Support US!
            </router-link>
          </div>
        </div>
      </article>
    </div>
    <div class="column is-8">
        <div class="columns">
          <div class="column is-12 content">
            <h1><a href="#">Also recorded in Progressbar:</a></h1>
          </div>
        </div>
        <div class="columns">
            <div class="column is-6">
            <iframe height="360"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PLfCtn83lMV3CzkXkGdkdUnNZvD5c4hBbC"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
          </div>
          <div class="column is-6">
            <iframe height="360"
            src="https://www.youtube.com/embed/videoseries?list=PL7Q4UCybIXBG5SkXQX0CqLBQbaCVWYjvF"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'video',
  metaInfo: {
    title: 'Video recordings Progressbar'
  },
  data() {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
  /* .content h1 {
    color:blue;
  } */
  @media only screen and (max-width: 768px) {
    iframe {
      width: 85vw;
      height: 15em;
    }
  }

  iframe {
    width: 100%;
  }
</style>
