<template>
<div class="emailVerification">
      <div class="columns">
            <div v-if="!this.confirmed" class="column is-narrow">
                <a class="button is-light is-small is-outlined" disabled>{{ $route.params.verificationCode }}</a>
            </div>
            <div class="column is-narrow">
                <a v-if="!this.confirmed" @click="confirmMail($route.params.verificationCode)" class="button is-light is-large is-outlined">{{ this.button.verify }}</a>
                <a v-if="this.confirmed" class="button is-light is-medium is-outlined" disabled>{{ this.button.verify }}</a>
            </div>
            <div v-if="this.confirmed" class="column is-narrow">
                <router-link to="../order"><a class="button is-light is-large is-outlined">{{ this.button.continue }}</a></router-link>
            </div>
      </div>
</div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'emailVerification',
  data() {
    return {
      button: {
        subscribe: 'Subscribe to the queue',
        verify: 'Confirm my email',
        continue:'Continue to Order'
      },
      confirmed: false
    }
  },
  methods: {
    confirmMail(hash) {
      axios({
          method: 'get',
          url: this.$api.base + this.$api.verify,
          params: {
            hash
          }
        })
        .then(response => {
          console.log(response)
          this.button.verify = response.data.code
          this.confirmed = response.data[Object.keys(response.data)[0]].confirmed
          if (response.data[Object.keys(response.data)[0]].authToken) {
            this.$ls.set('user', Object.keys(response.data)[0])
            this.$ls.set('authToken', response.data[Object.keys(response.data)[0]].authToken)
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*@import '~bulma/css/bulma.css';*/
</style>
