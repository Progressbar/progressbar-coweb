<template>
<div class="Testimonials">
  <div class="columns">
    <div class="column is-12">
      <article class="tile is-child notification is-black is-size-4">
        <h1 class="title has-text-centered"><router-link to="/#testimonials">📝 Testimonials</router-link></h1>
        <div class="columns">
          <div class="column is-4" v-for="r in testimonials">
            <br>⭐️⭐️⭐️⭐️⭐️ <a :href="r.link"><span class="time" v-html="r.time"></span></a>
            <br>"<span v-html="r.review">"</span>
            <br><span class="author" v-html="r.name"></span>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'Testimonials',
  metaInfo: {
    title: 'Reviews of Coworking |'
  },
  data() {
    return {
      testimonials: [
        {
          name: "- Filipa A.",
          review: "Progressbar is the perfect place for working right at the center of Bratislava. It offers all you need to find the concentration needed for achieving your goals, either if it is your professional work or your side projects. The staff is super friendly and always available to help. They also host several meetups and workshops on different topics. I definitely recommend it.",
          time: "2 months ago",
          link: "https://goo.gl/maps/SMcJNHDC9cm6qzkz7"
        },
        {
          name: "- Lukas O.",
          review: "Amazing place full of interesting productive people. A place where ideas are born and made into reality. The atmosphere is very positive, the staff wholesome and welcoming, and they give people an awesome opportunity to bloom. Definitely come check it out!",
          time: "3 months ago",
          link: "https://goo.gl/maps/GEd6XDUDF425fxEQ9"
        },
        {
          name:"- Jakub B.",
          review: "Great co-working and event space for all futuristic entrepreneur kids! Definitely give this place a shot, you will be immediately impressed by the progressive mindset, nice people and aesthetic venue.",
          time: "3months ago",
          link: "https://goo.gl/maps/TdabFhspuex8XYnG6"
        }
      ]
    }
  }
}
</script>
<style>
.time {
  color:grey;
}
.author {
  color:hotpink;
}
</style>
