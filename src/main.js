import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from '../src/router/index'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#D0FF14',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

import VueFoldable from 'vue-foldable'
import 'vue-foldable/dist/vue-foldable.css'
Vue.component('foldable', VueFoldable)

import comp from '@vue-foldable/baidu'
import '@vue-foldable/baidu/dist/baidu.css'

Vue.component('baidu-foldable', comp)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
