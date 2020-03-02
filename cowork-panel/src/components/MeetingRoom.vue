<template>
<div class="meetingroom">
<div class="tile is-ancestor">
  <div class="tile is-parent is-12">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/waomeeting-01-4.jpg" loading="lazy" alt="meeting room bratislava coworking"/>
      </figure>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child">
          <figure class="image">
            <img src="/static/img/meetingroom/recording_podcast.jpg" loading="lazy" alt="meeting room bratislava coworking"/>
          </figure>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent is-size-4">
    <article class="tile is-child notification is-black">
      <div class="content">
        <p class="title">Meeting room 🤝</p>
        <div class="content">
          <p>🧠 Perfect for brainstorming and meeting clients</p>
          <p>📍 Downtown location</p>
          <p>💺 Capacity 10 seats </p>
          <p>📽 Projector with Chromecast</p>
          <p>🎨 Whiteboard</p>
          <p>🎧 Acoustically insulated </p>
          <p>🎧 Great for Podcasts</p>
          <p>💞 By renting our meeting room you are supporting community space</p>
        </div>
        <div class="btn-container">
          <a class="button is-black is-block is-large meeting"
            href="mailto:info@progressbar.sk?subject=I want to book Progressbar Meeting Room!">
            <!-- {{ orderPrices.meetingRoom }}€ / hour</a> -->
            Book meeting room</a>
        </div>
      </div>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/spoznajkandidata.jpg" loading="lazy" alt="meeting room bratislava coworking"/>
      </figure>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/meeting_room_february_2020.jpg" loading="lazy" alt="meeting room bratislava coworking"/>
      </figure>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/pb-02.jpg" loading="lazy" alt="meeting room bratislava coworking"/>
      </figure>
    </article>
  </div>
</div>
</div>
</template>
<script>

export default {
  name: 'meetingroom',
  metaInfo: {
    title: 'Meeting room in downtown of Bratislava'
  },
  data() {
    return {
      href: {
        iframes: [
          "https://www.google.com/maps/embed?pb=!4v1548615947594!6m8!1m7!1sCAoSLEFGMVFpcE1uOUhxclBDNFJtN0VsaDRfYnZzbFRKaldSdGlJZER3cTR6Tkcz!2m2!1d48.14466111111111!2d17.1154!3f272.452135499486!4f-1.9685896130948208!5f0.4000000000000002"
        ],
      },
      orderPrices: {
        meetingRoom: 10
      }
    }
  }
}
</script>
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
</style>
