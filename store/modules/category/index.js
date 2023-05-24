const URL = '/categories'

export default {
  namespaced: true,
  state: () => ({}),
  actions: {
    async getCategories() {
      const result = await this.$axios.$get(URL)
      return result
    },
    async addCategory(store, payload) {
      const result = await this.$axios.$post(URL, payload)
      return result
    },
    async updateCategory(store, {id, payload}) {
      const result = await this.$axios.$put(`${URL}/${id}`, payload)
      return result
    }
  },
  mutations: {},
  getters: {}
}
