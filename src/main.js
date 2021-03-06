import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

// Global style css
import './style/index.css'
import './style/font.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
