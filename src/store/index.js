import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'

import builds from './builds'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    builds,
  },
})

export default store
