<template>
<div class="silentplace">
<div class="tile is-ancestor">
  <div class="tile is-parent is-4">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/cowork/focus_room_cat_view.jpg" alt="focus room cowork bratislava"/>
      </figure>
    </article>
  </div>
  <div class="tile is-parent is-4">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/cowork/focus_room_corner_call_room.jpg" alt="focus room cowork bratislava"/>
      </figure>
    </article>
  </div>
  <div class="tile is-parent is-size-4">
    <article class="tile is-child notification is-black">
      <div class="content">
        <p class="title">🎯🧠 Silent Place to Work in Bratislava</p>
        <div class="content">
          <p>📍 Downtown location</p>
          <p>👩‍🎨 Creative environment</p>
          <p>📚 Knowledge rich community</p>
          <p>🧠 Perfect for brainstorming</p>
          <p>🎧 Accoustic insulated space</p>
          <p>🙏 Perfect for Team Collaborations</p>
          <p>🤙 Great for international video conference hangouts</p>
          <p>💞 By renting our cowork you are supporting our community </p>
        </div>
        <div class="btn-container">
          <a class="button is-black is-block is-large meeting"
            href="mailto:info@progressbar.sk?subject=I want to try Progressbar Cowork!">
            I want to try Progressbar Cowork
          </a>
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>
<script>

export default {
  name: 'silentplace',
  metaInfo: {
    title: 'Silent place to work in downtown of Bratislava'
  },
  data() {
    return {}
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
</style>
