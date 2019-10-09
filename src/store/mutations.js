import Vue from 'vue'

const mutations = {
  setTraits (state, traits) {
    state.traits = traits 
  },
  addTraits (state, traits) {
    traits.forEach((trait) => {
      Vue.set(state.traits, trait.id, trait)
    })
  },
}

export default mutations
