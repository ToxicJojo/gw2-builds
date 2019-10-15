import api from '@/api'

// TODO abstract this logic into one function. Or creating a factory.
const actions = {
  async loadTraits ({ state, commit }, ids) {
    // We only need to load ids that are not already loaded.
    const notLoadedIds = ids.filter((id) => {
      return state.traits[id] === undefined
    })

    // Don't hit the api if there are no new traits to load.
    if (notLoadedIds.length >= 1) {
      const traits = await api.getTraits(notLoadedIds)
      commit('addTraits', traits)
    }
  },
  async loadSpecializations ({ state, commit }, ids) {
    // We only need to load ids that are not already loaded.
    const notLoadedIds = ids.filter((id) => {
      return state.specializations[id] === undefined
    })

    // Don't hit the api if there are no new traits to load.
    if (notLoadedIds.length >= 1) {
      const specializations = await api.getSpecializations(notLoadedIds)
      commit('addSpecializations', specializations)
    }
  },
  async loadProfessions ({ state, commit }, ids) {
    // We only need to load ids that are not already loaded.
    const notLoadedIds = ids.filter((id) => {
      return state.professions[id] === undefined
    })

    // Don't hit the api if there are no new traits to load.
    if (notLoadedIds.length >= 1) {
      const professions = await api.getProfessions(notLoadedIds)
      commit('addProfessions', professions)
    }
  },
  async loadSkills ({ state, commit }, ids) {
    // We only need to load ids that are not already loaded.
    const notLoadedIds = ids.filter((id) => {
      return state.skills[id] === undefined
    })

    // Don't hit the api if there are no new traits to load.
    if (notLoadedIds.length >= 1) {
      const skills = await api.getSkills(notLoadedIds)
      commit('addSkills', skills)
    }
  },
}

export default actions
