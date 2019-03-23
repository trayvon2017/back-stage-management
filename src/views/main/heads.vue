<template>
    <div class="heads">
      <div class="menu-box">
        <a class="menu-switch" @click="switchMenu" href="javascript:void(0);">
        <span :class="['iconfont', isCollapse ?
        'icon-menu-close':'icon-menu-open']">
        </span>
        </a>
      </div>
      <div class="breadcrumb-container">
        <el-breadcrumb style="display: inline-block" separator="/">
          <el-breadcrumb-item
            v-for="(route,i) in matchedPaths"
            :key="route.path">
            <span v-if= "route.meta.nopage || i===matchedPaths.length-1 ">
            {{route.path?route.name:''}}</span>
            <router-link v-else :to="route.path?route.path:'/'">{{route.name?route.name:'首页'}}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="avatar-box">
        <el-dropdown
          placement="top"
          >
          <img src="../../assets/avatar.jpg" alt="avatar">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/info/center">个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <a @click="logout" href="javascript:void(0);">退出</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
import auth from '../../utils/authentication.js'
export default {
  mixins: [auth],
  name: 'heads',
  data () {
    return {
      isCollapse: false,
      matchedPaths: []
    }
  },
  mounted () {
    this.matchedPaths = this.$route.matched
  },
  methods: {
    switchMenu () {
      this.isCollapse = !this.isCollapse
      this.bus.$emit('isCollapse', this.isCollapse)
    },
    logout () {
      // 暂时是本地的退出登录,不发送ajax请求
      console.log('执行了')
      this.$store.state.user.iflogin = false
      this.removeToken()
      this.$router.push({path: '/login'})
    }
  },
  watch: {
    $route (to, from) {
      this.matchedPaths = to.matched
      console.log(this.matchedPaths)
    }
  }
}
</script>
<style lang="scss">
  .el-breadcrumb{
    margin-left: 30px;
  }
  .el-button{
    /*padding: 0;
    border: none;*/
  }
</style>

<style lang="scss" scoped>
  .heads{
    height: 50px;
    width: 100%;
    background-color: #ffffff;
    line-height: 50px;
    .menu-box{
      display: inline-block;
      vertical-align: top;
      height: 100%;
      a{
        display: block;
        height: 50px;
        width: 50px;
        text-align: center;
        span.iconfont{
          font-size: 25px;
        }
      }
    }
    .breadcrumb-container{
      display: inline-block;
      vertical-align: top;
      height: 100%;
    }
    .avatar-box{
      float: right;
      margin-right: 60px;
      cursor: pointer;
      img{
        height: 40px;
        border-radius: 20px;
      }
      .user-tooltip{

      }
    }
    /*.avatar-box {
      float: right;
      height: 40px;
      width: 40px;
      margin-right: 20px;
      margin-top: 5px;
      a{
        img{
          height: 40px;
          display: block;
          border-radius: 20px;
        }
      }
    }*/
  }
</style>
