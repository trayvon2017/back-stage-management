import Mock from 'mockjs'
import moment from 'moment'
const Random = Mock.Random
const userlist = [
  {username: 'root', password: '123456'},
  {username: 'admin', password: '123456'}
]
const baseUrl = 'http://localhost:3306'
const url = {
  login: baseUrl + '/login',
  logout: baseUrl + '/logout',
  assement: baseUrl + '/chartdata/assement',
  flow: baseUrl + '/chartdata/flow',
  products: baseUrl + '/chartdata/products',
  table: baseUrl + '/tabledata'
}
export function initMock () {
  // 拦截登录
  Mock.mock(url.login, 'post', options => {
    console.log(options)
    var data = {
      status: 1,
      message: '登陆失败'
    }
    var user = JSON.parse(options.body) // 请求体内容为json
    if ('username' in user && 'password' in user) {
    //  判断用户名密码是否正确
      userlist.some(function (lu) {
        if (lu.username === user.username && lu.password === user.password) {
          data.status = 0
          data.message = '登录成功'
          data.token = Random.guid()
          lu.username === 'admin' ? data.role = 'admin' : data.role = 'root'
          return true
        }
      })
    }
    return JSON.stringify(data)
  })
  // 拦截echart
  Mock.mock(url.flow, 'get', options => {
    // 要判断是否带着token请求
    console.log(options)
    var data = Mock.mock({
      dates: () => {
        let list = []
        for (let i = 0; i < 7; i++) {
          list.unshift(moment().subtract(i, 'days').format('MM-DD'))
        }
        return list
      },
      subjects: () => {
        var subjects = []
        var subject = ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        subject.forEach(function (v, i) {
          subjects[i] = Mock.mock({
            'dataset|2': {
              name: v,
              data: function () {
                let list = []
                for (let i = 0; i < 7; i++) {
                  list.unshift(Random.natural(100, 500))
                }
                return list
              }
            }
          }).dataset
        })
        return subjects
      }
    })
    // console.log('mock' + data)
    // console.log(JSON.stringify(data))
    return JSON.stringify(data)
  })
  Mock.mock(url.assement, 'get', options => {
    // 要判断是否带着token请求
    console.log(options)
    var data = Mock.mock({
      dates: () => {
        let list = []
        for (let i = 0; i < 7; i++) {
          list.unshift(moment().subtract(i, 'days').format('MM-DD'))
        }
        return list
      },
      subjects: () => {
        var subjects = []
        var subject = ['预期', '实际']
        subject.forEach(function (v, i) {
          subjects[i] = Mock.mock({
            'dataset|2': {
              name: v,
              data: function () {
                let list = []
                for (let i = 0; i < 7; i++) {
                  list.unshift(Random.natural(5000, 15000))
                }
                return list
              }
            }
          }).dataset
        })
        return subjects
      }
    })
    // console.log('mock' + data)
    // console.log(JSON.stringify(data))
    return JSON.stringify(data)
  })
  Mock.mock(url.products, 'get', options => {
    // 要判断是否带着token请求
    console.log(options)
    var data = Mock.mock({
      subjects: () => {
        var subjects = []
        var subject = ['海贼王', '柯南', '龙珠', '犬夜叉', '火影忍者']
        subject.forEach(function (v, i) {
          subjects[i] = Mock.mock({
            'dataset|2': {
              name: v,
              'value|10000-15000': 1000
            }
          }).dataset
        })
        return subjects
      }
    })
    console.log('拦截器,products')
    console.log(data)
    return JSON.stringify(data)
  })
  Mock.mock(RegExp(url.table, 'i'), 'get', options => {
    console.log(options)
    var tag = options.url.split('=')[1]
    console.log(tag)
    switch (tag) {
      case 'drag':
        return Mock.mock({
          'tabledata|10': [{
            'id|+1': 1,
            'name': '@cname',
            'address': '@county(true)',
            'phone': /^1[356789]\d{8}/,
            'email': '@email'
          }]
        })
    }
  })
}
