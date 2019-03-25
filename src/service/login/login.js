import request from '../request.js'
export default {
  methods: {
    login (username, password) {
      return request({
        url: '/login',
        method: 'post',
        data: {
          username,
          password
        }
      })
    },
    getInfo (token) {
      return request({
        uel: 'user/info',
        method: 'get',
        params: {token}
      })
    },
    logout () {
      return request({
        url: 'user/logout',
        method: 'post'
      })
    },
    getFlowChartData () {
      return request({
        url: 'chartdata/flow',
        method: 'get'
      })
    },
    getAssementChartData () {
      return request({
        url: 'chartdata/assement',
        method: 'get'
      })
    },
    getProductsChartData () {
      return request({
        url: 'chartdata/products',
        method: 'get'
      })
    },
    getTableData (tag) {
      return request({
        url: 'tabledata',
        method: 'get',
        params: {
          tag: tag
        }
      })
    }
  }
}
