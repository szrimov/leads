const URL = '/categories'

export default {
  namespaced: true,
  state: () => ({}),
  actions: {
    async getCategories() {
      const result = await this.$axios.$get(URL)
      return result
    }
  },
  mutations: {},
  getters: {}
}
