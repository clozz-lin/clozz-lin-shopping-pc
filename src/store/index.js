import { createStore } from 'vuex'

const moduleA = {
  state: () => {
    return {
      username: 'moduleA'
    }
  },
  getters: {
    changeName(state) {
      return state.username + '被修改了'
    }
  }
}

const moduleB = {
  namespaced: true,
  state: () => {
    return {
      username: 'moduleB'
    }
  },
  getters: {
    changeName(state) {
      return state.username + '被修改了'
    }
  }
}

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    a: moduleA,
    b: moduleB
  }
})
