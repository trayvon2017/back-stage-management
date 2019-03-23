<template>
  <div class="main">
    <navigation></navigation>
    <div :class="['container',
    isCollapse?'isCollapse':'']">
      <heads></heads>
      <router-view class="content-box"></router-view>
    </div>
  </div>
</template>

<script>
import navigation from './navigation.vue'
import heads from './heads.vue'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    navigation,
    heads
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    this.bus.$on('isCollapse', isCollapse => {
      this.isCollapse = isCollapse
    })
  }
}
</script>
<style lang="scss">
  .main {
    height: 100%;
    background-color: hotpink;
    .container {
      min-height: 100%;
      margin-left: 220px;
      overflow: auto;
      background-color: cyan;
      transition: margin-left .3s ease-in-out;
      &.isCollapse{
        margin-left: 64px;
      }
      .content-box{
        background-color: #F0F2F5;
        padding: 20px;
        min-height: calc(100vh - 50px);
      }
    }
  }
</style>
