<template>
<div class="d14">
<div class="columns is-centered">
  <div class="column is-narrow">
    <img src="/static/img/d14/d14_a.png" alt=""/>
  </div>
</div>
<div class="columns is-centered">
  <div class="column is-narrow">
    <img src="/static/img/d14/d14_b.png" alt=""/>
  </div>
</div>
<div class="columns is-centered">
  <div class="column is-narrow">
    <img src="/static/img/d14/d14_c.png" alt=""/>
  </div>
</div>
<div class="columns is-centered">
  <div class="column is-narrow">
    <img src="/static/img/d14/d14_d.png" alt=""/>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'd14',
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
