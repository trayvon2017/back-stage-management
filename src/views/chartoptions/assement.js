import requestApi from '../../service/login/login.js'

var assementOption = {
  title: {
    text: '销售额评估'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['预期', '实际']
  },
  grid: {
    width: '80%',
    height: '80%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
  },
  series: []
}
export default {
  mixins: [requestApi],
  data () {
    return {
      assementOption
    }
  },
  methods: {
    getAssementData () {
      // 请求数据
      return new Promise((resolve, reject) => {
        this.getAssementChartData().then(response => {
          // 渲染表格
          console.log('预期')
          console.log(response)
          var data = JSON.parse(response)
          this.assementOption.xAxis.data = data.dates
          this.assementOption.series = []
          data.subjects.forEach(function (subject) {
            this.assementOption.series.push({
              name: subject.name,
              type: 'line',
              data: subject.data
            })
          }, this)
          console.log('getassement')
          console.log(this.assementOption)
          resolve(this.assementOption)
        }, error => {
          this.$message.error('获取图标失败')
          console.log(error)
        })
      })
    }
  }
}
