<template>
<div class="photos">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child">
          <figure class="image">
            <img src="/static/img/FB_IMG_1510777652113.jpg" alt="scuttlebutt patchwork introduction"/>
          </figure>
        </article>
        <article class="tile is-child">
          <figure class="image">
            <img src="/static/img/P70617-213350.jpg" alt="opensource weekend pizza party"/>
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <figure class="image">
            <img src="/static/img/PANO_20171205_200226.jpg" alt="python meetup coding class christmas led workshop"/>
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/PANO_20171205_194535.jpg" alt="python meetup coding class christmas led workshop"/>
        </figure>
      </article>
    </div>
    <div class="tile is-child">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/PANO_20171128_193449.jpg" alt="ethereum bratislava meetup"/>
        </figure>
      </article>
    </div>
  </div>
  <div class="tile is-parent is-vertical">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/P70325-182149.jpg" alt="arduino drawbot coding class">
      </figure>
    </article>
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/P60112-180207.jpg" alt="python meetup">
      </figure>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/P70325-113946.jpg" alt="rust meetup"/>
      </figure>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/P61125-162025.jpg" alt="synthetizer meetup"/>
      </figure>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/P60409-111441.jpg" alt="nodeschool bratislava javascript meetup"/>
      </figure>
    </article>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'photos',
  data() {
    return {
      seats: {
        subscribers: 0,
        capacity: 0
      },
      credited: 0,
      orderSum: {},
      newSubscriber: {
        email: ''
      },
      button: {
        subscribe: 'Register for cowork',
        verify: '__',
        login: 'Send login link',
        order: 'Go to Dashboard'
      },
      daysBooked: 0,
      subEmail: '',
      isUser: false,
      config: {
        baseWebUrl: 'https://cowork.progressbar.sk/',
        orderPrices: {
          day: 4,
          month: 80,
          fix: 160,
          locker: 10,
          nonstop: 20
        },
        openHours: {
          monthPass: {
            start: 6,
            end: 18
          },
          dayPass: {
            start: 9,
            end: 18
          }
        },
        coworkLogin: false,
        coworkSubscribe: false
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
