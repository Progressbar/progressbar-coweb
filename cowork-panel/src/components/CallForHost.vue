<template>
<div class="WorkInProgress">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-10 content">
        <h1 class="title has-text-grey-light">
          Call for a Host 🙌
        </h1>
        <img src="/static/img/IMG_20180324_092514_HDR.jpg" alt="nodeschool bratislava women edition" />
        <h3 class="has-text-grey-light">
          We are looking for kind and responsible host into our space.
          We are tech focused cowork with lot of interesting people around tech, space, crypto and other stuff<br />
          <br />
          We are doing a lot technical & technological meetups, lookup for our past meetups.<br />
          If you are student || !student you are free to do your work in our space while helping others.<br />
          List of actions which are need to fullfill their dreams:
          <ul>
            <li>
              Filling fridge with drinks
            </li>
            <li>
              Clean 🥛 glasses (we are looking for bigger dishwasher for the future)
            </li>
            <li>
              Onboarding new 👩‍💻 coworkers
            </li>
            <li>
              Helping with Audio/Video during meetups
            </li>
            <li>
              Handle curious requests 😯🤔🙌
            </li>
          </ul>
          🌟Bonus🌟points🌟 if you are into technical stuff and if you want to learn to code 👩‍💻<br /><br />
          We can donate you by 💶 cash or ⛓💰 crypto, whatever works for you.<br /><br />
          Contact us via <a href="https://t.me/coworkprogressbar">Telegram channel</a>  or <a href="https://facebook.com/progressbar">facebook.com/progressbar</a>
        </h3>
        <img src="/static/img/wide.jpg" alt="progressbar technology cowork bratislava">
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'WorkInProgress',
  data() {
    return {
      wipItems: ``
      .trim()
      .split('\n')
      .map((line) => line.trim())
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
