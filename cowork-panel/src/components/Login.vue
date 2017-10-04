<template>
<div class="login">
      <div v-if="" class="columns">
            <div class="column is-narrow">
                  <div class="control has-icons-left">
                        <input v-model="loginEmail" class="input is-medium is-white" type="email" placeholder="Enter your email">
                        <span class="icon is-medium is-left">
                              <i class="fa fa-envelope"></i>
                        </span>
                  </div>
            </div>
            <div class="column is-narrow">
              <a @click="sendLoginCode(loginEmail)" class="button is-primary is-medium is-outlined">{{ this.button.login }}</a>
            </div>
      </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      button: {
        login: 'Send login link'
      },
      loginEmail: ''
    }
  },
  methods: {
    sendLoginCode(email) {
      axios({
          method: 'get',
          url: this.$api.base + this.$api.login,
          params: {
            email
          }
        })
        .then(response => {
          console.log(response)
          this.button.login = response.data.code
          // this.confirmed = response.data[Object.keys(response.data)[0]].confirmed
          // if (response.data[Object.keys(response.data)[0]].authToken) {
          //   this.$ls.set('user', Object.keys(response.data)[0])
          //   this.$ls.set('authToken', response.data[Object.keys(response.data)[0]].authToken)
          // }
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
