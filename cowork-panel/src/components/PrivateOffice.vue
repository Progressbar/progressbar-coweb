<template>
<div class="meetingroom">
<div class="tile is-ancestor">
  <div class="tile is-parent is-12">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/waomeeting-01-4.jpg" alt="meeting room bratislava cowork"/>
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
            <img src="/static/img/meetingroom/waomeeting-01.jpg" alt="meeting room bratislava cowork"/>
          </figure>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent is-size-4">
    <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Private Office Dunajska 🤝</p>
          <div class="content">
            <p>🌃 24/7 access</p>
            <p>🔑 Dedicated office with all basic equipment (tables, chairs)</p>
            <p>⚡️ Ultra-fast Internet</p>
            <p>🚴‍♀️ Bicycle parking U-rack</p>
            <p>📍 Downtown location, Dunajska 14, Bratislava</p>
            <p>💞 By renting our private office you are supporting community</p>
            <p>🕰 Available on Q1 2020</p>
          </div>
          <div class="btn-container">
            <a class="button is-black is-block is-large meeting" href="https://docs.google.com/forms/d/e/1FAIpQLSd1WbCPxlLyeKyDHNMLFCHCyjOnz946WjCIlDPAq4XIE_8eKQ/viewform">
              Submit your interest</a>
          </div>
        </div>
      </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/pb-02.jpg" alt="meeting room bratislava cowork"/>
      </figure>
    </article>
  </div>
</div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';

export default {
  components: {
    ImageFrame
  },
  name: 'meetingroom',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
</style>
