import Vue from 'vue'
import Router from 'vue-router'
import VueLocalStorage from 'vue-ls'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueQr from 'vue-qr'
import VueMeta from 'vue-meta'
import paths from './paths'
var options = {
  namespace: 'pgbcowork_'
}

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLocalStorage, options)
Vue.use(VueQr)
Vue.use(VueMeta)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [...paths],
  scrollBehavior(to, from, savedPosition) {
    let position = {}
    if (to.hash) {
      position.offset = { y: 0 }
      position.selector = to.hash

      return position
    }
    return { x: 0, y: 0 }
  }
})
