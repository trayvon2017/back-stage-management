// import loginAPI from '../../service/login/menu.js'
// import author from '../../utils/authentication.js'
export default {
  // mixins: [loginAPI, author],
  state: {
    token: '',
    name: '',
    avatar: '',
    roles: [],
    iflogin: false
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATOR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_IF_LOGIN: (state, iflogin) => {
      state.iflogin = iflogin
    }
  },
  actions: {
    // 登录
    /*
    Login ({commit}, userdata) {
      const username = userdata.username.trim()
      console.log(this.login)
      // 创建Promise执行异步操作
      return new Promise((resolve, reject) => {
        this.login(username, userdata.password).then(
          response => {
            const data = response.data
            this.setToken(data.token)
            commit('SET_TOKEN', data.token)
            resolve()
          }
        ).catch(
          error => {
            console.log(error) // 调试用
            reject(error)
          }
        )
      })
    }
*/
  }
}
