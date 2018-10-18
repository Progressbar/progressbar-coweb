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
          Progressbar is looking for a kind and responsible host to help us take care of our space.
          We are a tech focused cowork where you will be meeting a lot of interesting people around tech, space, crypto,... on a daily basis.<br />
          <br />
          We are organising many technical & technological meetups as well.<br />
          You are free to do your work or study in our space while helping others as you will have a lot of free time here.<br />
          List of actions which are going to be your duty:
          <ul>
            <li>
              Filling fridge with drinks
            </li>
            <li>
              Onboarding new 👩‍💻 coworkers
            </li>
            <li>
              Cleaning 🥛 glasses (we are planning to use a dishwasher in the future)
            </li>
            <li>
              Helping during meetups, like setup presentation equip (audio/video), prepare chairs, etc
            </li>
            <li>
              Watering our plants 🌵🌷
            </li>
            <li>
              Taking out trash from time to time 😱
            </li>
            <li>
              Handling curious requests 😯🤔🙌
            </li>
          </ul>

          🌟Bonus🌟points🌟 if you are into technical stuff and want to learn to code 👩‍💻.<br /><br />
          We can donate you by 💶 cash or ⛓💰 crypto, whatever works for you.<br /><br />
          Contact us via <a href="https://t.me/coworkprogressbar" target="_blank">Telegram channel</a>  or <a href="https://facebook.com/progressbar" target="_blank">facebook.com/progressbar</a> if you are interested 🤙.
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
