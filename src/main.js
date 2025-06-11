import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/sass/tailwind.css'

import '@fortawesome/fontawesome-free/css/all.css'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
