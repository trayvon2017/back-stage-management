<template>
  <div class="navigation">
    <!--<el-scrollbar style="height: 100%;" class="el-scrollbar__wrap">-->
    <div class="wrapper">
      <el-menu class="el-menu-vertical-nav"
               @open="handleOpen"
               @close="handleClose"
               text-color="#A6ADB4"
               :default-active="activeRoute"
               router
               :collapse="isCollapse">
        <div class="logo">
          <a href="javascript:void(0);">
            <img src="../../../static/logo.jpg" alt="fb-design">
              <h1 ref="brand" v-show="!isCollapse">F-DESIGN</h1>
          </a>
        </div>
        <label v-for="item in menulist" :key="item.name">
          <el-submenu v-if="item.sub" :index="item.path">
            <template slot="title">
              <span :class="item.icon"></span>&nbsp;&nbsp;&nbsp;
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="subitem in item.sub" :index="subitem.path" :key="subitem.name">
                {{subitem.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="item.path">
            <span :class="item.icon"></span>&nbsp;&nbsp;&nbsp;
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </label>
      </el-menu>
    </div>
    <!--</el-scrollbar>-->
  </div>
</template>

<script>
import menu from '../../utils/menulist.js' // 拿list列表
export default {
  mixins: [menu],
  data () {
    return {
      showBrand: true,
      isCollapse: false,
      activeRoute: '/dashboard'
    }
  },
  created () {

  },
  mounted () {
    // 监听从head里面传来的菜单开关
    this.bus.$on('isCollapse', isCollapse => {
      this.isCollapse = isCollapse
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    $route: function (to, from) {
      this.activeRoute = to.path
    }
  }
}
</script>
<style lang="scss">
  // 重置element-ui导航栏样式
  $bg: #001529;
  $brand-bg: #002140;
  $sub-bg: #000C17;
  $sub-bg-active: #1890FF;
  $color: #A6ADB4;
  $color-active: #ffffff;// hover avtive改变字体颜色
  // 取消scrollbar底部的滚动条
  /*.el-scrollbar__wrap{
    overflow: visible;
    overflow-x: hidden;
  }*/
  //主menu和submenu背景色
  .el-menu{
    border: none;// 默认有一个有边框
    background-color: $bg;
    &.el-menu--inline{
      background-color: $sub-bg !important;
    }
  }
  // hover时候子菜单项目 菜单项标题
  .el-submenu__title:hover,.el-menu-item:hover{
    color: $color-active !important;
    background-color: transparent !important;
  }
  // 选中之后 子菜单项目的颜色
  .el-menu-item.is-active {
    color: #ffffff;
    background-color: $sub-bg-active !important
  }
  // 折叠之后让菜单项的文字消失,只留下图标,因为渲染的时候加了一层
  // label所以捎麻烦
  .el-menu--collapse .el-submenu__title{
    span,i{
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block
    }
    span.iconfont{// 折叠之后 图标的字体大小不变
      height: 56px;
      width: 56px;
      visibility: visible;
      font-size: 18px;
    }

  }
  // 普通菜单项,菜单栏折叠之后字体16->18
  .el-menu--collapse .el-menu-item span.iconfont{
    font-size: 18px;
  }

</style>
<style lang="scss" scoped>
  $bg: #001529;
  $brand-bg: #002140;
  $sub-bg: #000C17;
  $sub-bg-active: #000C17;
  $bg-active: #1890FF;
  $color: #A6ADB4;
  $color-active: #ffffff;// hover avtive改变字体颜色
  .navigation{
    position: fixed;
    left: 0;
    top:0;
    height: 100%;
    background-color: $bg;
    .wrapper{
      height: 100%;
      overflow: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0px;
      }
    }
    .logo{
      width: 100%;
      height: 50px;
      color: #ffffff;
      padding: 0 10px;
      line-height: 50px;
      text-align: center;
      a{
        line-height: 50px;
        img{
          height: 30px;
          vertical-align: middle;
        }
        h1{
          display: inline-block;
          color: #ffffff;
          font-size: 20px;
          vertical-align: middle;
          &.hiddenh1{
            font-size: 0;
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block
          }
        }
      }
    }
  }
  .el-menu-vertical-nav:not(.el-menu--collapse) {
    width: 220px;
    min-height: 100%;
  }
</style>
