import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import './assets/sass/tailwind.css'

import '@fortawesome/fontawesome-free/css/all.css'


Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
