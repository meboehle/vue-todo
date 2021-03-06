import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
