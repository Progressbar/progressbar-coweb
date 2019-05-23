<template>
  <div class="Podcast">
    <div class="columns is-centered">
      <div class="column is-12 content">
        <iframe height="600" src="https://www.youtube.com/embed/videoseries?list=PLfCtn83lMV3CzkXkGdkdUnNZvD5c4hBbC" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-12 content">
        <h1 class="">
        <a href="https://cowork.progressbar.sk/podcast">Prvý Pokusný Podcast Progressbaru - PPPP - 🔗🔗🔗 links</a><br><br>
        🎥 <a href="https://www.youtube.com/playlist?list=PLfCtn83lMV3CzkXkGdkdUnNZvD5c4hBbC">Youtube Playlist</a><br>
        🎧 <a href="https://open.spotify.com/show/2arFgMfH8p27iEpwJmFv23">Spotify</a><br>
        🐬 <a href="https://api.substack.com/feed/podcast/10023.rss">RSS</a><br>
        📧 <a href="https://pppp.substack.com/">Newsletter</a>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Podcast',
        data () {
          return {
            href: {
              coworkGroup: 'https://t.me/coworkprogressbar',
              googleMapsProgressbar: 'https://goo.gl/maps/5Vgh7SUAL6N2',
              coworkerProgressbar: 'https://www.coworker.com/slovakia/bratislava/cowork-progressbar',
              facebookPageProgressbar: 'https://www.facebook.com/pg/progressbar/reviews/',
              instagram: 'https://www.instagram.com/progressbar_sk/',
              donate: 'https://donate.progressbar.sk'
            }
        }
      }
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
  a {
    color: hotpink;
  }
</style>
