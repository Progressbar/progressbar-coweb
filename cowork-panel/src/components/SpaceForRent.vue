<template>
<div class="SpaceForRent">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6 content">
            <h1 class="title">
              Space for Rent & Events
            </h1>
            <p v-for="line of content">{{line}}</p>
            <p>
              You can contact us via email or messenger
            </p>
            <p><br />
              <a class="button is-info is-medium is-outlined" href="mailto:info@progressbar.sk">info@progressbar.sk</a>
              <a class="button is-info is-medium is-outlined" href="https://m.me/progressbar">Contact us via ⚡️Messenger</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6 content">
            <h1 class="title">
              If you're organizing an event in our space
            </h1>
            <ol>
              <li>
                <p>
                  consider including this text in the description of your event:
                </p>
                <p>
                  <blockquote class="quote-to-include-in-event">
                    You can support Progressbar through <a class="quote-link" href="https://donate.progressbar.sk">donate.progressbar.sk</a>,
                    and check their cowork through <a class="quote-link" href="https://cowork.progressbar.sk">cowork.progressbar.sk</a>
                  </blockquote>
                </p>
              </li>
              <li>
                <p>
                if your event is on Facebook, send a "co-host" request to <a href="https://www.facebook.com/progressbar/">Progressbar</a> for greater pull and easier administration 🤗
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SpaceForRent',
  data() {
    return {
      content: `
        Our venue is 231 m² in Dunajska 14, at the heart of Bratislava. The space can comfortably accomodate 80 people, but it can be expanded to up to 160 thanks to the bar right below.

        As a non-profit that cares about technology, we try to incentivize tech communities in Bratislava, by allowing them to use the venue for free for their events.
        As a non-profit that needs to pay rent and bills, we also need funding! Any donations are welcome. Without donations, we won't be able too keep the familiar hackerspace spirit a lot of people in Bratislava are seeking, and offer these kinds of services

        Our suggestion is a voluntary donation of 20-60€ for every evening, depending on what you/your community can afford and how much you'll be using the space
        Thanks for the help!
      `
      .trim()
      .split('\n')
      .map((line) => line.trim()),
    }
  }
}
</script>
<style scoped>
.pull-down {
  margin-top: 100px;
}
.quote-to-include-in-event {
  border-color: #29e;
  background-color: #0003;
} 
.quote-link {
  text-decoration: underline;
}
</style>
