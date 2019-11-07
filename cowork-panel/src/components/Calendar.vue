<template>
  <div class="Calendar">
    <div class="columns">
      <div class="column is-12">
        <h1>Event space</h1>
        <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FPrague&amp;src=cHJvZ3Jlc3NiYXIuc2tfdXQxcmQ4YjNwZ2VqMWk1MDc5NGEycmY4c29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;title=Progressbar%20Events&amp;mode=MONTH&amp;showPrint=1&amp;showCalendars=0&amp;showNav=1&amp;showTitle=0&amp;showTabs=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <h1>Meeting Room</h1>
        <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FPrague&amp;src=cHJvZ3Jlc3NiYXIuc2tfaXQ1OGc1NTB0cXN0aG8wZjE2cjFydDM1ZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;showTitle=0&amp;title=Main%20Meeting%20Room&amp;showTz=0&amp;showCalendars=0&amp;showNav=1&amp;showDate=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
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
  name: 'Calendar',
  metaInfo: {
    title: 'Calendar Events & Meeting room | Progressbar'
  },
  data () {
    return {
      href: {
        iframes: [
          'https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FPrague&amp;src=cHJvZ3Jlc3NiYXIuc2tfdXQxcmQ4YjNwZ2VqMWk1MDc5NGEycmY4c29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;title=Progressbar%20Events&amp;mode=MONTH'
        ]
      }
    }
  }
  }
</script>

<style>
  h1 {
    color: hotpink;
    font-size: 48px;
  }
  a {
    color: hotpink;
  }
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  iframe {
    width: 100%;
  }
</style>
