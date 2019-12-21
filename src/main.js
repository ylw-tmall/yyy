import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Checklist, Swipe, SwipeItem } from 'mint-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.prototype.$http = axios
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
Vue.component(Checklist.name, Checklist);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
