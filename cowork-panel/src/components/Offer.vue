<template>
<div class="offer">
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Daypass</p>
          <div class="content">
            <p>⏰  {{ openHours.dayPass.start }} - {{ openHours.dayPass.end }}</p>
            <p>Hotdesk ♨️</p>
            <p>First takes</p>
            <p>Enjoy insider view</p>
          </div>
        </div>
          <div class="">
            <router-link class="button is-black is-block is-large" to="/membership">{{ orderPrices.day }}€ / day</router-link>
          </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Flex (30 days)</p>
          <div class="content">
            <p>⏰  {{ openHours.monthPass.start }} - {{ openHours.monthPass.end }}</p>
            <p>Hotdesk ♨️</p>
            <p>Save money</p>
            <p>Support us even when you're not in the space ❤️</p>
          </div>
        </div>
          <div class="">
            <router-link class="button is-black is-block is-large" to="/membership">{{ orderPrices.month }}€ / month</router-link>
          </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Fixdesk</p>
          <div class="content">
            <p>⏰ {{ openHours.fixdesk.start }} - {{ openHours.fixdesk.end }}</p>
            <p>180cm long desk</p>
            <p>Enjoy window <router-link to="/view">view</router-link>!</p>
            <p>Tip: use <router-link to="/membership">24/7 addon</router-link></p>
          </div>
        </div>
          <div class="">
            <router-link class="button is-black is-block is-large" to="/membership">{{ orderPrices.fixdesk }}€ / month</router-link>
          </div>

      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Meeting room</p>
          <div class="content">
            <p>⏰ Not during events</p>
            <p>Glass sealed</p>
            <p>10 chairs</p>
            <p>Whiteboard</p>
            <p>Projector</p>
          </div>
        </div>
          <div class="btn-container">
            <router-link class="button is-black is-block is-large" to="/membership">{{ orderPrices.meetingRoom }}€ / hour</router-link>
          </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">24/7 addon</p>
          <div class="content">
            <p>Work any 🕙</p>
            <p>Play your own music</p>
            <p>Be part of internal events!</p>
          </div>
        </div>
          <div class="">
            <router-link class="button is-black is-block is-large" to="/membership">{{ orderPrices.nonstop}}€ / month</router-link>
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
      orderPrices: {
        day: 8,
        month: 100,
        fixdesk: 180,
        locker: 10,
        nonstop: 20,
        meetingRoom: 5,
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
  background-color: #d71e58;
}

.notification {
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
