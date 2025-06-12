import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import store from './store';
import './assets/sass/tailwind.scss'

import '@fortawesome/fontawesome-free/css/all.css'


Vue.prototype.$http = axios

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
