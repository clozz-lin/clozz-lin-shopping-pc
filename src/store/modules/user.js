// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        profile: ''
      }
    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUSer(state, payload) {
      state.profile = payload
    }
  }
}
