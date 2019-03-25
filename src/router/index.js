import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/login.vue'
import home from '../views/main/home.vue'
import dashboard from '../views/content/dashboard.vue'
import guide from '../views/content/guide.vue'
import auth from '../views/content/auth.vue'
import images from '../views/content/images.vue'
import practical from '../views/content/practical.vue'
import chart from '../views/content/chart.vue'
import tablelist from '../views/content/tablelist.vue'
import artical from '../views/content/artical.vue'
import tab from '../views/content/tab.vue'
import errorpage from '../views/content/errorpage.vue'
import excel from '../views/content/excel.vue'
import info from '../views/content/info.vue'
import dyn from '../views/table/dyn.vue'
import drag from '../views/table/drag.vue'
import edit from '../views/table/edit.vue'
import comprehensive from '../views/table/comprehensive.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: home,
      redirect: 'dashboard',
      children: [
        {path: 'dashboard', component: dashboard, name: '首页'},
        {path: 'guide', component: guide, name: '导航'},
        {path: 'auth', component: auth, name: '权限测试', meta: {requiresAuth: true}},
        {path: 'images', component: images, name: '图片赏析'},
        {path: 'practical', component: practical, name: '实用'},
        {path: 'chart', component: chart, name: '图表'},
        {path: 'table',
          component: tablelist,
          name: '表格',
          children: [
            {path: 'dyn', component: dyn, name: '文章列表'},
            {path: 'drag', component: drag, name: '发表文章'},
            {path: 'edit', component: edit, name: '发表文章'},
            {path: 'comprehensive', component: comprehensive, name: '发表文章'}
          ]
        },
        {path: 'artical',
          component: artical,
          name: '文章',
          meta: {nopage: true},
          children: [
            {path: 'list', component: artical, name: '文章列表'},
            {path: 'publish', component: artical, name: '发表文章'}
          ]
        },
        {path: 'tab', component: tab, name: '页签'},
        {path: 'excel', component: excel, name: 'excel'},
        {path: 'errorpage',
          component: errorpage,
          name: '错误页面',
          meta: {nopage: true},
          children: [
            {path: '404', component: errorpage, name: '404'},
            {path: '501', component: errorpage, name: '501'}
          ]
        },
        {path: 'info',
          component: info,
          name: '个人中心',
          meta: {nopage: true},
          children: [
            {path: 'center', component: info, name: '个人信息'},
            {path: 'security', component: info, name: '安全认证'}
          ]
        }
      ]
    }
  ]
})
