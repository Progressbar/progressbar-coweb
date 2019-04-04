<template>
  <div class="GiveUsReviewBooking">
    <div class="columns is-centered">
      <div class="column is-7 content">
        <p class="has-text-white is-size-2">
          Hey {{$route.params.coworkerName}}
        </p><p class="has-text-white is-size-2">
          Hope you enjoyed a day in our coworking space.
        </p><p class="has-text-white is-size-2">
          We would love to ask you for a few minutes to write a review on
          <a :href="href.googleMapsProgressbar">Google Maps</a>,
          <a :href="href.coworkerProgressbar">Coworker.com</a>
          and our <a :href="href.facebookPageProgressbar">Facebook Page</a>.
        </p><p class="has-text-white is-size-2">
          If you like what we are doing follow us on <a :href="href.instagram">Instagram @progressbar_sk</a>
        </p><p class="has-text-white is-size-2">
          If you would like to support us you can <a :href="href.donate">give us donation</a>.
        </p><p class="has-text-white is-size-2">
          Don’t forget - sharing is caring.
        </p><p class="has-text-white is-size-2">
          Thank you for your time.
        </p>
      </div>
      <div class="column is-5 content">
        <p><a href=""><img :src="QrCodes.googleMapsProgressbar"></a>
        </p>
        <p><a href=""><img :src="QrCodes.facebookPage"></a>
        </p>
        <p><a href=""><img :src="QrCodes.instagramProgressbar"></a>
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
            },
            QrCodes: {
              googleMapsProgressbar: '/static/img/review/google_maps_progressbar.jpg',
              facebookPage: '/static/img/review/facebook_review_progressbar.jpg',
              instagramProgressbar: '/static/img/review/instagram_progressbar.jpg'
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
