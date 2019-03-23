// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局css
import './styles/index.scss'
// 引入字体图标
import './assets/fonts/iconfont.css'
// 引入store
import store from './store/store.js'
import 'animate.css'
import {initMock} from './server/interceptor'
initMock() // 初始化mock拦截ajax
Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('调用了1' + store.state.user.iflogin)
  if (store.state.user.iflogin) {
    console.log('调用了2')
    // 已经登录
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      console.log('调用了3')
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

// 注册bus
Vue.prototype.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
