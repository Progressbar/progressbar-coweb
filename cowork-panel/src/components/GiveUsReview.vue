<template>
  <div class="GiveUsReview">
    <div class="columns is-centered">
      <div class="column is-6 content">
        <p class="has-text-white is-size-4">
          Hey {{$route.params.coworkerName}}
        </p><p class="has-text-white is-size-4">
          Thanks for booking free day pass to our space.
        </p><p class="has-text-white is-size-4">
          We have 👼 angels in our space who are there every weekday from 9am to 6pm, so you’re welcome to come over in this timeframe.
        </p><p class="has-text-white is-size-4">
          Before your visit, please add yourself to our <a :href="href.coworkGroup">public cowork channel on Telegram</a>.
        </p><p class="has-text-white is-size-4">
          Make sure to text us on Telegram, when you will be downstairs, so we can open the door for you.
        </p><p class="has-text-white is-size-4">
          Angel will take you on little tour and show you our space.
          If you will have any questions, please text us on Telegram to ask angel.
        </p><p class="has-text-white is-size-4">
          By the end of your visit or after, please find a few minutes to write us a review of our space
          on <a :href="href.googleMapsProgressbar">Google Maps</a>,
          <a :href="href.coworkerProgressbar">Coworker.com</a>
          and our <a :href="href.facebookPageProgressbar">Facebook Page</a> .
          Also we would be happy, if you follow us on instagram <a href="https://www.instagram.com/progressbar_sk/">@progressbar_sk</a></p>
        <p class="has-text-white is-size-4">
          Hope you enjoyed your stay in our space.
        </p><p class="has-text-white is-size-4">
          Don’t forget - sharing is caring.
        </p><p class="has-text-white is-size-4">
          Thank you for your time.
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'GiveUsReview',
        data () {
          return {
            href: {
              coworkGroup: 'https://t.me/coworkprogressbar',
              googleMapsProgressbar: 'https://bit.ly/2LWUonW',
              coworkerProgressbar: 'https://bit.ly/2AywQ43',
              facebookPageProgressbar: 'https://bit.ly/2VwRaMf'
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
