<template>
<div class="emailVerification">
      <div class="columns">
            <div class="column is-narrow">
                  <a @click="confirmMail($route.params.verificationCode)" class="button is-light is-medium is-outlined">{{ $route.params.verificationCode }}</a>

            </div>
            <div class="column is-narrow">
                  <a @click="confirmMail($route.params.verificationCode)" class="button is-light is-medium is-outlined">{{ this.button.verify }}</a>
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
      api: {
        base: 'http://localhost:8170/yangwao/progressbar-coweb/',
        subscribers: '',
        newSubscriber: 'emailSubscribe/',
        verify: 'verify/'
      },
      button: {
        subscribe: 'Subscribe to the queue',
        verify: 'Confirm my email'
      }
    }
  },
  methods: {
    confirmMail(hash) {
      axios({
          method: 'get',
          url: this.api.base + this.api.verify,
          params: {
            hash
          }
        })
        .then(response => {
          console.log(response)
          this.button.verify = response.data.code
          this.$ls.set('user', Object.keys(response.data)[0])
          this.$ls.set('authToken', response.data[Object.keys(response.data)[0]].authToken)
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
