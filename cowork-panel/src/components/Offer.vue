<template>
<div class="offer">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-size-4" v-for="plan in plans">
      <article :class="{'is-highlighted': plan.highlight }" class="tile is-child notification is-black">
        <div class="content">
          <p v-if="plan.url" class="title is-size-3"><router-link :to='plan.url'>
            {{plan.name}}</router-link></p>
          <p v-else class="title is-size-3">{{plan.name}}</p>
          <div class="content">
            <p>{{plan.time}}</p>
            <p>{{plan.description[0]}}</p>
            <p>{{plan.description[1]}}</p>
            <p>{{plan.description[2]}}</p>
          </div>
        </div>
        <div class="">
          <a class="button is-black is-block is-large"
            :href="href.coworkGroup">{{ plan.price }}€ / {{plan.period}}</a>
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
      plans: [
        { name: 'Weekpass', time: '9 am ~ 6 pm ⏰', description:
          ['Available desk in space', 'Great for try out', 'Enjoy insider view'],
          price: '50', period: 'week' },
        { name: 'Flex', time: '6 am ~ 6 pm ⏰', description:
          ['Available desk in space', 'Great for longer stays 🏡', 'Support us remotely 💞'],
          price: '120',  period: 'month' },
        { name: 'Fixdesk', time: '24/7 🌃', description:
          ['Dedicated desk & chair', '♾ meeting room hours', '180cm long desk'],
          price: '200', period: 'month', highlight: 'true',
          url: '/fixdesk-cowork-bratislava' },
        { name: 'Meeting Room 🤝', time: 'Acoustically isolated', description:
          ['10 seats','Whiteboard', 'Projector 📽 '], price: '10', period: 'hour',
          url: '/meeting-room-cowork-bratislava' }
      ],
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
