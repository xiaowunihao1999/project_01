import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 直接导入代码
import '@/assets/global.less'
// 直接导入 elementUI组件模块
import '@/elementUI/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
