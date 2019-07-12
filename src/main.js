import Vue from 'vue'
import axios from 'axios'
import 'es6-promise/auto';
import App from './App.vue'

Vue.config.productionTip = true;


new Vue({
  render: h => h(App),
}).$mount('#app');
