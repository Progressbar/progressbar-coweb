<template>
  <div class="GiveUsReviewBooking">
    <div class="columns is-centered">
      <div class="column is-8 content">
        <p class="has-text-white is-size-4">
          Hey {{$route.params.coworkerName}}
        </p><p class="has-text-white is-size-4">
          Thank you for booking free day pass to Progressbar.
        </p><p class="has-text-white is-size-4">
          Our 👼 angels will welcome you, and are ready to help you with anything from 9am to 6pm on workdays.
        </p><p class="has-text-white is-size-4">
          Before you visit us, please add yourself to our <a :href="href.coworkGroup">public cowork channel on Telegram</a>.
        </p><p class="has-text-white is-size-4">
          Please text us when you arrive downstairs, so we can open the door for you.
        </p><p class="has-text-white is-size-4">
          Angel will take you on little tour and show you our space.
          If you have any questions, text us on Telegram or ask an angel while on the tour.
        </p><p class="has-text-white is-size-4">
          We would be very happy if you find some time before you leave to review our space
          on <a :href="href.googleMapsProgressbar">Google Maps</a>,
          <a :href="href.coworkerProgressbar">Coworker.com</a>
          and our <a :href="href.facebookPageProgressbar">Facebook Page</a> .
        </p><p class="has-text-white is-size-4">
          If you like what we are doing follow us on <a :href="href.instagram">Instagram @progressbar_sk</a></p>
        </p><p class="has-text-white is-size-4">
          We hope you’ll enjoy your stay.
        </p><p class="has-text-white is-size-4">
          Thank you for your time.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'GiveUsReviewBooking',
        metaInfo: {
          title: 'Free day pass in cowork for review',
        },
        data () {
          return {
            href: {
              coworkGroup: 'https://t.me/coworkprogressbar',
              googleMapsProgressbar: 'https://goo.gl/maps/5Vgh7SUAL6N2',
              coworkerProgressbar: 'https://www.coworker.com/slovakia/bratislava/cowork-progressbar',
              facebookPageProgressbar: 'https://www.facebook.com/pg/progressbar/reviews/',
              instagram: 'https://www.instagram.com/progressbar_sk/'
            }
        }
      }
    }
</script>

<style>
a:hover {
  color: inherit;
  text-decoration: underline;
}

a {
  color: hotpink;
}
</style>
