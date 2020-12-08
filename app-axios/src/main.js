import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'lib-flexible'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Icon } from 'vant';
import { Lazyload } from 'vant';
 Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'static/img/error.jpg',
  loading: 'static/img/loading.gif',
  attempt: 3
})
Vue.use(Icon);
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
