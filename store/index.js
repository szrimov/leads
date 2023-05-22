export default {
  modules: {},
  state: () => ({
    modals: []
  }),
  actions: {
    openModal({commit}, id) {
      commit('MODAL_ADD', id)
    },
    closeModal({commit}, id) {
      commit('MODAL_REMOVE', id)
    },
    closeAllModals({commit}) {
      commit('CLEAR_MODALS')
    }
  },
  mutations: {
    MODAL_ADD(state, id) {
      state.modals.push(id)
    },
    MODAL_REMOVE(state, id) {
      state.modals = state.modals.filter(i => i !== id)
    },
    CLEAR_MODALS(state) {
      state.modals = []
    }
  },
  getters: {}
}
