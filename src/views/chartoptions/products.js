import requestApi from '../../service/login/login.js'

var productsOption = {
  title: {
    text: '动漫周边占比',
    x: 'center'
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: ['海贼王', '柯南', '龙珠', '犬夜叉', '火影忍者']
  },
  series: [
    {
      name: '动漫周边占比',
      type: 'pie',
      radius: '70%',
      roseType: 'angle',
      data: []
    }
  ]
}
export default {
  mixins: [requestApi],
  data () {
    return {
      productsOption
    }
  },
  methods: {
    getProductsData () {
      return new Promise((resolve, reject) => {
        // 请求数据
        this.getProductsChartData().then(response => {
          // 渲染表格
          console.log('response')
          console.log(response)
          var data = JSON.parse(response)
          this.productsOption.series[0].data = []
          data.subjects.forEach(function (subject) {
            this.productsOption.series[0].data.push({
              name: subject.name,
              value: subject.value
            })
          }, this)
          console.log(this.productsOption)
          resolve(this.productsOption)
        }, error => {
          this.$message.error('获取图标失败')
          console.log(error)
        })
      })
    }
  }
}
