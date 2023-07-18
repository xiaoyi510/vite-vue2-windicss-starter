import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN.js' // lang i18n

import App from '@/App.vue'

import 'virtual:windi.css'

import router from '@/router'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(PiniaVuePlugin)
Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  pinia: createPinia(),
  render: h => h(App),
})
