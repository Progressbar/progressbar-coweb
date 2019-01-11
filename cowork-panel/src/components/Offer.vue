<template>
<div class="offer">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-size-4">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title is-size-3">Weekpass</p>
          <div class="content">
            <p>{{ openHours.dayPass.start }} - {{ openHours.dayPass.end }} ⏰</p>
            <p>Available desk in space</p>
            <p>Great for try out</p>
            <p>Enjoy insider view</p>
          </div>
        </div>
        <div class="">
          <a class="button is-black is-block is-large" :href="href.coworkGroup">{{ orderPrices.week }}€ / week</a>
        </div>
      </article>
    </div>
    <div class="tile is-parent is-size-4">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title is-size-3">Flex</p>
          <div class="content">
            <p>{{ openHours.monthPass.start }} - {{ openHours.monthPass.end }} ⏰</p>
            <p>Available desk in space</p>
            <p>Great for longer stays</p>
            <p>Support us remotely 💞</p>
          </div>
        </div>
        <div class="">
          <a class="button is-black is-block is-large" :href="href.coworkGroup">{{ orderPrices.month }}€ / month</a>
        </div>
      </article>
    </div>
    <div class="tile is-parent is-size-4">
      <article class="tile is-child notification is-highlighted is-black">
        <div class="content">
          <p class="title is-size-3">Fixdesk</p>
          <div class="content">
            <p>24/7 🌃 </p>
            <p>Dedicated desk & chair</p>
            <p>Unlimited meeting room hours</p>
            <p>180cm long desk</p>
            <!-- <p>⏰ {{ openHours.fixdesk.start }} - {{ openHours.fixdesk.end }}</p> -->
            <!-- <p>Enjoy window <router-link to="/view">view</router-link>!</p> -->
          </div>
        </div>
        <div class="">
          <a class="button is-black is-block is-large" :href="href.coworkGroup">{{ orderPrices.fixdesk }}€ / month</a>
        </div>
      </article>
    </div>
    <div class="tile is-parent is-size-4">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title is-size-3">🤝 Meeting room</p>
          <div class="content">
            <p>Acoustically isolated</p>
            <p>10 seats</p>
            <p>Whiteboard</p>
            <p>Projector 📽 </p>
          </div>
        </div>
        <div class="btn-container">
          <a class="button is-black is-block is-large" :href="href.coworkGroup">{{ orderPrices.meetingRoom }}€ / hour</a>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'offer',
  data() {
    return {
      href: {
        coworkGroup: 'https://t.me/coworkprogressbar',
      },
      orderPrices: {
        week: 50,
        month: 120,
        fixdesk: 200,
        meetingRoom: 10,
      },
      openHours: {
        monthPass: {
          start: '06:00',
          end: '18:00'
        },
        dayPass: {
          start: '09:00',
          end: '18:00'
        },
        fixdesk: {
          start: '06:00',
          end: '18:00'
        }
      },
    }
  }
}
</script>

<style scoped>
input {
  background-color: #ffffff;
}
.content ul {
  list-style-type: square;
  margin-top: 0;
}

.card-content {
  padding: 1rem;
}

.offer-price {
  text-align: center;
  padding-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  /* border-top: 1px solid black; */
}

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tile article .title {
  font-size: 1rem;
  text-align: center;
}

.tile article a.button.is-black {
  border: 1px solid white;
  align-self: flex-end;
}

.tile article a.button.is-black:hover {
  background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
}

.is-highlighted {
  background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
}

.notification {
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
