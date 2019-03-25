<template>
    <div>
      <el-tag type="primary">该页面需要超级管理员权限</el-tag>
      <div class="auth-content">
        <el-tag v-if="ifRoot" type="success">欢迎你,超级管理员</el-tag>
        <el-tag v-else type="danger">很抱歉你无权访问该页面,请联系管理员</el-tag>
      </div>
    </div>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
      ifRoot: false
    }
  },
  created () {
    this.ifRoot = this.$store.state.user.role === 'root'
  }
}
</script>

<style scoped>
  .auth-content {
    padding: 20px 10px;
    margin-top: 20px;
    background-color: #fff;
  }
</style>
