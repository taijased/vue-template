import Vue from 'vue'
import Vuex from 'vuex'

import header from '../modules/header/_store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    header 
  }
})
