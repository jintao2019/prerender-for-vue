import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
  },
  getters: {
    count: state => state.count,
  },
  mutations: {
    add(state,payload) {
      state.count += payload
    },
    reduce(state, payload) {
      state.count -= payload
    }
  },
  actions: {
    add({ commit }, payload) {
      commit('add', payload)
    },
  }
})
