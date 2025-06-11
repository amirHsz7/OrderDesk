import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/sass/tailwind.css'



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
