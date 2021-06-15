import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.prototype.$http= axios
axios.defaults.baseURL = '/'  //关键代码


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
