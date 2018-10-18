<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          i
        </div>
        <div class="column is-3">
          <ul>
            <li v-for="social in socials">
              <a :href="social.url" target="_blank">{{social.title}}</a>
            </li>
          </ul>
        </div>
        <div class="column is-6">
          ifka
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <SupportUs></SupportUs>
    </div> -->
    <div class="container">
      <div class="columns">
        <div class="column is-12 has-text-right">
          <a class="button is-info is-small is-outlined" href="mailto:info@progressbar.sk" target="_blank">info@progressbar.sk</a>
          <a class="button is-info is-small is-outlined" href="https://m.me/progressbar" target="_blank">Contact us via Messenger</a>
          <a class="button is-info is-small is-outlined" href="https://t.me/coworkprogressbar" target="_blank">Contact us via Telegram</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          Made with ❤️ by Progressbar members
        </div>
        <div class="column is-6 has-text-right">
          {{new Date().getFullYear()}} © Progressbar
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import SupportUs from '@/components/SupportUs'
export default {
  name: 'AppFooter',
  components: {
    SupportUs
  },
  data () {
    return {
      emails: [
        'info@progressbar.sk'
      ],
      socials: [
        { url: 'https://www.facebook.com/progressbar', title: 'Facebook', icon: '' },
        { url: 'https://www.instagram.com/progressbar_sk', title: 'Instagram', icon: '' },
        { url: 'https://github.com/Progressbar/progressbar-coweb', title: 'Github', icon: '' }
      ]
    }
  },
  methods: {
  }
}
</script>
<style>
.footer {
  background-color: inherit;
  color: white;
}
</style>
