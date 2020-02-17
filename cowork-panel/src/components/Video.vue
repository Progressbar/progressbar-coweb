<template>
<div class="video">
  <div class="columns">
    <div class="column is-12 content">
    <p><h1><a href="https://www.youtube.com/playlist?list=PLfCtn83lMV3BqBe45jgaNw4LqPNnhq6IG">Playlist of archived streams</a> | | <a href="https://www.youtube.com/channel/UCpun3Ro3aUJPoFVZwgqd98A">Progressbar channel</a></h1></p>
    <iframe height="800"
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PLfCtn83lMV3BqBe45jgaNw4LqPNnhq6IG"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    </div>
  </div>
  <div class="columns">
    <div class="column is-3">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Want better quality? Same here.</p>
          <div class="content">
            <p>📍 Here is our plan:</p>
            <p>👼 digital slides (100-200€)</p>
            <p>🧠 better audio quality (300+)</p>
            <p>👩‍🎨 better camera (600+)</p>
            <p>📚 more camera angels (600+/ks)</p>
            <p>🎧 general improvements</p>
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
    <div class="column is-4">
      <iframe height="360"
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PLfCtn83lMV3CzkXkGdkdUnNZvD5c4hBbC"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      </iframe>
    </div>
    <div class="column is-5">
      <iframe height="360"
      src="https://www.youtube.com/embed/Vn0n7ZWtAsQ"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      </iframe>
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

  @media only screen and (max-width: 768px) {
    iframe {
      width: 85vw;
    }
  }

  iframe {
    width: 100%;
  }
</style>
