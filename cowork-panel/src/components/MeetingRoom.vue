<template>
<div class="meetingroom">
<div class="tile is-ancestor">
  <div class="tile is-parent is-12">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/IMG_0963.jpg" alt="meeting room bratislava cowork"/>
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
            <img src="/static/img/meetingroom/IMG_0984.jpg" alt="meeting room bratislava cowork"/>
          </figure>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">🤝 Meeting room</p>
          <div class="content">
            <p>Perfect for brainstorming and meeting clients</p>
            <p>Glass sealed</p>
            <p>10 chairs</p>
            <p>Whiteboard</p>
            <p>Projector</p>
          </div>
          <div class="btn-container">
            <router-link class="button is-black is-block is-large" to="/membership">{{ orderPrices.meetingRoom }}€ / hour</router-link>
          </div>
        </div>
      </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/IMG_0970.jpg" alt="meeting room bratislava cowork"/>
      </figure>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
    <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/meetingroom/IMG_0966.jpg" alt="meeting room bratislava cowork"/>
        </figure>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/meetingroom/IMG_1026.jpg" alt="meeting room bratislava cowork"/>
        </figure>
      </article>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'meetingroom',
  data() {
    return {
      orderPrices: {
        day: 8,
        month: 100,
        fixdesk: 180,
        locker: 10,
        nonstop: 20,
        meetingRoom: 10,
      },
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
        baseWebUrl: 'https://progressbar.sk/',
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
