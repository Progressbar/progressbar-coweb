<template>
<div class="SpaceForRent">
  <section class="hero is-dark is-fullheight">
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
            <p>
              <article class="message is-info">
                <div class="message-body">
                  <p>
                    <strong>For organizers of events at our space</strong>
                  </p>
                  <p>
                    1. please include this text in your event description:
                  </p>
                  <p>
                    You can support Progressbar via <a href="https://donate.progressbar.sk">https://donate.progressbar.sk</a>
                  </p>
                  <p>
                    You can try out cowork at Progressbar <a href="https://cowork.progressbar.sk">https://cowork.progressbar.sk</a>
                  </p>
                  <p>
                    2. if you have Facebook event, send co-host request to Progressbar and we can share it as well 🤗
                  </p>
                </div>
              </article>
            </p>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
