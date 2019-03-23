// 存储token
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      TokenKey: 'vue_admin_backage_token'
    }
  },
  methods: {
    getToken () {
      return Cookies.get(this.TokenKey)
    },
    setToken (token) {
      return Cookies.set(this.TokenKey, token)
    },
    removeToken () {
      return Cookies.remove(this.TokenKey)
    }
  }
}
