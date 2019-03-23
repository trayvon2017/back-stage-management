<template>
    <div class="guide-container">
      <p class="tip-content">
        引导页对于一些第一次进入项目的人很有用
      </p>
      <el-button @click.stop="startGuide" type="info">开启引导</el-button>
    </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
const steps = [
  {
    element: '.navigation',
    popover: {
      title: '侧边栏导航',
      description: '展示整个后台系统的各种功能',
      position: 'right-center'
    }
  },
  {
    element: '.menu-switch',
    popover: {
      title: '左侧导航开关',
      description: '点击以折叠导航栏以图表的形式展示,或者打开查看完整信息',
      position: 'bottom'
    }
  },
  {
    element: '.breadcrumb-container',
    popover: {
      title: '面包屑导航',
      description: '展示当前页面所处的位置,单击可跳转',
      position: 'bottom'
    }
  },
  {
    element: '.avatar-box',
    popover: {
      title: '个人头像',
      description: '鼠标移动到当前位置,可展示更多操作,查看个人信息,退出登录等',
      position: 'left'
    }
  }
]
export default {
  name: 'guide',
  data () {
    return {
      driver: null
    }
  },
  mounted () {
    this.driver = new Driver({
      doneBtnText: '结束导航', // Text on the final button
      closeBtnText: '我是老司机',
      nextBtnText: '下一步', // Next button text for this step
      prevBtnText: '上一步' // Previous button text for this step
    })
    this.driver.defineSteps(steps)
  },
  methods: {
    startGuide () {
      console.log(123)
      this.driver.start()
    }
  }
}
</script>

<style scoped>
  .guide-container{
    background-color: #fff;
  }
  .tip-content{
    background-color: lightgreen;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
</style>
