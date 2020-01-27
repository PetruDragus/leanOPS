import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

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

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)
// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)

import VoerroTagsInput from '@voerro/vue-tagsinput';
Vue.component('tags-input', VoerroTagsInput);

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

import VueSwal from 'vue-swal'
Vue.use(VueSwal)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
