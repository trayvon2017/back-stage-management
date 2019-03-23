import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:3306',
  timeout: 1000
})

service.interceptors.request.use(
  config => {
    /* if (token判断) {
      // 有存token的话 加一个token
    } */
    return config
  },
  error => {
    // do sth with menu error
    this.$message('网络连接失败,请稍后重试')
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    /* 根据res */
    if (response.status !== 200) {
      // 错误信息 网络繁忙 稍后重试
      this.$message('网络繁忙,请稍后重试')
    } else {
      return res
    }
  },
  error => {
    this.$message('网络连接失败,请稍后重试')
    Promise.reject(error)
  }
)
export default service
