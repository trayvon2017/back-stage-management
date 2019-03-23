<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import authentication from './utils/authentication'
export default {
  mixins: [authentication],
  name: 'App',
  created () {
    console.log(this.getToken())
    if (this.getToken()) {
      this.$store.commit('SET_IF_LOGIN', true)
      this.$router.push({path: '/'})
    }
  },
  mounted () {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onbeforeunload = ev => {
      // this.removeToken()
    }
  },
  beforeDestroy () {
    this.removeToken()
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
