import request from '../request.js'
export default {
  methods: {
    getMenuList () {
      return request({
        url: 'menu.json',
        method: 'get'
      })
    }
  }
}
