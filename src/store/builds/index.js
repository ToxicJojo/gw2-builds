import state from './state'
import mutations from './mutations'
import actions from './actions'

const buildsModule = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default buildsModule
