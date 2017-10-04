<template>
<div class="login">
      <div v-if="!$route.params.loginCode" class="columns">
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
      <div v-if="$route.params.loginCode" class="columns">
        <div class="column is-narrow">
            <a class="button is-light is-small is-outlined" disabled>{{ $route.params.loginCode }}</a>
        </div>
        <div class="column is-narrow">
          <a @click="logmein($route.params.loginCode)" class="button is-warning is-medium is-outlined">{{ this.button.logmein }}</a>
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
        logmein: 'Log me in',
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
    },
    logMeIn(loginCode) {
      axios({
        method: 'get',
        url: this.$api.base + this.$api.logmein,
        params: {
          loginCode
        }
      })
      .then(response => {
        console.log(response)
        this.button.login = response.data.code
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
