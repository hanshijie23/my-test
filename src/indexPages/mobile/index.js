// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import router from '@/router/mobile.js'
import 'stylus/base.styl'
import 'stylus/common.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mobile-content',
  router,
  components: { App },
  template: '<App/>'
})
