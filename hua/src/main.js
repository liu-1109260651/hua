import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import Hua_footer from './components/hua_footer.vue'
import Hua_header from './components/hua_header.vue'
 
Vue.component('hua-footer',Hua_footer)
Vue.component('hua-header',Hua_header)
Vue.prototype.axios=axios
axios.defaults.baseURL = 'http://127.0.0.1:9000'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
