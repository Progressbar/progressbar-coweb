<template>
  <div class="Calendar">
    <div class="columns">
      <div class="column is-12">
        <h1>
          <router-link to="rent-meeting-room-coworking-bratislava">
            Meeting Room</router-link> -
          <a href="mailto:info@progressbar.sk?subject=I want to try Progressbar Meeting Room!">Book meeting room</a></h1>
        <iframe src="https://calendar.google.com/calendar/embed?src=progressbar.sk_3238323439303131393037%40resource.calendar.google.com&ctz=Europe%2FPrague&amp;showTitle=0&amp;wkst=2" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <h1><router-link to="/rent-a-space">Venue Event Space</router-link> -
        <a href="mailto:info@progressbar.sk?subject=I want to try Progressbar Event Space!">Book Event Space</a></h1>
        <iframe src="https://calendar.google.com/calendar/embed?src=progressbar.sk_3835313939343335353737%40resource.calendar.google.com&ctz=Europe%2FPrague&amp;showTitle=0&amp;wkst=2" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <h1>Boxik Room</h1>
        <iframe src="https://calendar.google.com/calendar/embed?src=progressbar.sk_32303436333937303934%40resource.calendar.google.com&ctz=Europe%2FPrague&amp;showTitle=0&amp;wkst=2" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
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
    title: 'Calendar of Events & Meeting room'
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

<style scoped>
  h1 {
    color: hotpink;
    font-size: 48px;
  }
  a {
    color: hotpink;
    text-decoration: underline;
  }
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  iframe {
    width: 100%;
  }
</style>
