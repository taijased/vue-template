import Vue from 'vue'
import Vuex from 'vuex'

import header from '../modules/header/_store'
import projects from '../modules/projects/_store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    header,
    projects
  }
})
