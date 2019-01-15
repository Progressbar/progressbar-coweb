<template>
  <div class="GiveUsReviewBooking">
    <div class="columns is-centered">
      <div class="column is-8 content">
        <p class="has-text-white is-size-4">
          Hey {{$route.params.coworkerName}},
        </p><p class="has-text-white is-size-4">
          Hope you enjoyed day in our coworking space.
        </p><p class="has-text-white is-size-4">
          We would love to ask you for a few minutes to write review on
          on <a :href="href.googleMapsProgressbar">Google Maps</a>,
          <a :href="href.coworkerProgressbar">Coworker.com</a>
          and our <a :href="href.facebookPageProgressbar">Facebook Page</a>.
        </p><p class="has-text-white is-size-4">
          If you like what we are doing follow us on <a :href="href.instagram">Instagram @progressbar_sk</a>
        </p><p class="has-text-white is-size-4">
          If you would like to support us you can give us donation <a :href="href.donate">donate.progressbar.sk</a>.
        </p><p class="has-text-white is-size-4">
          Hope you enjoyed day in our space.
        </p><p class="has-text-white is-size-4">
          Don’t forget - sharing is caring .
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
        data () {
          return {
            href: {
              coworkGroup: 'https://t.me/coworkprogressbar',
              googleMapsProgressbar: 'https://goo.gl/maps/5Vgh7SUAL6N2',
              coworkerProgressbar: 'https://www.coworker.com/slovakia/bratislava/cowork-progressbar',
              facebookPageProgressbar: 'https://www.facebook.com/pg/progressbar/reviews/',
              instagram: 'https://www.instagram.com/progressbar_sk/',
              donate: 'https://donate.progressbar.sk'
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
