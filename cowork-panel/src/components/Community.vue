<template>
<div class="communitySpace">
  <div class="columns">
    <div class="column is-8">
      <div class="content">
        <img src="/static/img/eventspace/mlmu_december.jpg"
          alt="coworking bratislava technical machine learning meetup">
      </div>
    </div>
    <div class="column is-4 is-size-4">
      <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">🙌 Best place for your community meetup in Bratislava 🥰🙏</p>
          <div class="content">
            <p>📍 Downtown location</p>
            <p>👼 Safe Heaven for your community</p>
            <p>👪 <router-link to="/our-residents#meetups">Join our family of meetups</router-link></p>
            <p>👩‍🎨 Looking for adapter? We have it for you!</p>
            <p>📚 Knowledge rich community</p>
            <p>🧠 Perfect for brainstorming</p>
            <p>🎧 Accoustic insulated space</p>
            <p>🙏 Perfect for Team Collaborations</p>
            <p>💞 By renting our coworking you are supporting our community </p>
          </div>
          <div class="btn-container">
            <a class="button is-black is-block is-large meeting"
              href="mailto:info@progressbar.sk?subject=I want to host meetup!">
              I want to host meetup
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
  <div v-for="m in Math.ceil(meetups.length / 2)" class="columns">
    <div v-for="pic in meetups.slice((m-1) * 2, m * 2)" class="column is-6">
      <img :src="`/static/img/community/${pic}.jpg`" alt="coworking bratislava technical meetup">
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'communitySpace',
  metaInfo: {
    title: 'Place for your community meetup in downtown of Bratislava'
  },
  data() {
    return {
      meetups: [
        'IMG_20190926_193436','IMG_20191005_190549',
        'IMG_20191118_203804','IMG_20191023_182308',
        'IMG_20191017_190905','IMG_20191120_173248',
        'IMG_20191030_181118','IMG_20191029_182208',
        'IMG_20191118_205707','IMG_20191028_182837',
        'IMG_20191120_194054','IMG_20191124_123438',
        'IMG_20191125_182228','IMG_20191212_182052',
        'IMG_20191203_175838','IMG_20191128_184447',
        'IMG_20191203_181943','IMG_20191203_182640',
        'IMG_20191209_192754','IMG_20191210_205136',
        'IMG_20191202_194818','IMG_20191213_143321',
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
  .content img {
    padding-top: 4em;
  }
</style>
