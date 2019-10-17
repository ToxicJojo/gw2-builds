import Vue from 'vue'
import localStorageHelper from '@/util/local-storage-helper'

const mutations = {
  setBuilds (state, builds) {
    state.buildList = builds
    localStorageHelper.saveObject('builds', state.buildList)
  },
  addBuild (state, build) {
    state.buildList.push(build)
    localStorageHelper.saveObject('builds', state.buildList)
  },
  updateBuild (state, { index, build }) {
    Vue.set(state.buildList, index, build)
    localStorageHelper.saveObject('builds', state.buildList)
  },
}

export default mutations
