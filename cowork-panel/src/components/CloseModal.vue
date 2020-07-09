<template>
  <div class="modal" :class="{ 'is-active': isActive }">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <progressbar-logo-icon />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Sorry, we are temporarily closed 😭</strong>
              <br>
              Corona crisis hit us, however we are doing our best to reopen soon!
            </p>
            <a class="button is-black" @click="close" aria-label="close">I understand</a>
          </div>
        </div>
      </article>
    </div>
  </div>
  <button class="modal-close is-large" @click="close" aria-label="close"></button>
</div>
</template>

<script>
import ProgressbarLogoIcon from '@/components/ProgressbarLogoIcon.vue'

export default {
  name: 'CloseModal',
  components: {
    ProgressbarLogoIcon
  },
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    close() {
      this.isActive = false
    }
  }

}
</script>
