<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form">
      <h3>vue-后台管理系统</h3>
      <el-form-item prop="username">
        <span class="iconfont icon-user"></span>
        <el-input v-model="loginForm.username" auto-complete="on" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="iconfont icon-lock"></span>
        <el-input
          :type="showPwd ? '' : 'password'"
          v-model="loginForm.password"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
          placeholder="请输入密码">
        </el-input>
        <span @click="showPwd = !showPwd" :class="['showPwd','iconfont',showPwd ? 'icon-yanjing_kai':'icon-yanjing_bi']"></span>
      </el-form-item>
        <el-button
          class="login-button" :loading="loading" type="primary" @click.prevent="handleLogin">{{loading?'登陆中':'登录'}}</el-button>
    </el-form>
  </div>
</template>

<script>
import v from '../../utils/validate.js'
import loginApi from '../../service/login/login.js'
import authentication from '../../utils/authentication.js'
export default {
  mixins: [v, loginApi, authentication],
  name: 'login',
  data () {
    // 验证用户名
    var validateUsername = (rule, value, callback) => {
      if (!this.validatename(value)) {
        callback(new Error('用户名长度5-20位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      },
      showPwd: false,
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            const username = this.loginForm.username.trim()
            this.login(username, this.loginForm.password).then(
              resdata => {
                // 成功 cookies保存token token保存到store
                console.log(resdata)
                var data = JSON.parse(resdata)
                if (data.status === 0) { // 0成功 1失败
                  this.setToken(data.token)
                  this.$store.commit('SET_IF_LOGIN', true)
                  this.$store.commit('SET_ROLE', data.role)
                  this.$router.push({path: '/'})
                } else {
                  // 错误提示
                  this.$message.error('账号或者密码错误,请稍后重试!')
                }
                this.loading = false
              }
            ).catch(function (error) {
              // 失败 网络请求失败那些
              this.$message.error(error.message)
              this.loading = false
            })
          }, 2000)
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
  $bg:#2d3a4b;
  $light_gray:#eee;
  /*reset element-ui css*/
  .login-container {
    .el-input{
      display: inline-block;
      height: 47px;
      width: 85%;
      input{
        height: 47px;
        line-height: 47px;
        background-color: transparent;
        border: 0;
        -webkit-appearance: none;
        padding: 10px 5px 10px 15px;
        color: $light_gray;
        &:-webkit-autofill{
          -webkit-border-radius: 0;
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-filll-color: #fff !important;
        }
      }
    }
    .el-form-item{
      border: 1px solid rgba(255,255,255,0.1);
      background-color: rgba(0,0,0,0.1);
      border-radius: 5px;
      color: #454545;
      .el-form-item__content{
        margin-left: 10px;
        line-height: 47px;
      }
    }
  }
</style>
<style lang="scss" scoped>
  $bg:#2d3a4b;
  $light_gray:#eeeeee;
  $dark_gray:#889aa4;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    padding: 0;
    background-color: $bg;
    .login-form{
      position: absolute;
      left: 0;
      right: 0;
      margin: 150px auto;
      width: 520px;
      max-width: 100%;
      h3 {
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        margin-bottom: 20px;
      }
      span{
        font-size: 20px;
        color: #ffffff;
        &.showPwd{
          display: inline-block;
          height: 47px;
          width: 47px;
        }
      }
      .login-button{
        width: 100%;
        padding: 10px 0;
      }
    }
  }
</style>
