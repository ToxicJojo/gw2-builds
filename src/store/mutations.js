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
  setSpecializations (state, specializations) {
    state.specializations = specializations
  },
  addSpecializations (state, specializations) {
    specializations.forEach((specialization) => {
      Vue.set(state.specializations, specialization.id, specialization)
    })
  },
  setProfessions (state, professions) {
    state.professions = professions
  },
  addProfessions (state, professions) {
    professions.forEach((profession) => {
      Vue.set(state.professions, profession.id, profession)
    })
  },
}

export default mutations
