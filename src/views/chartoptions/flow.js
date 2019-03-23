import requestApi from '../../service/login/login.js'

var flowOption = {
  title: {
    text: '流量来源'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    width: '80%',
    height: '70%',
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
    type: 'value'
  },
  series: []
}
export default {
  mixins: [requestApi],
  data () {
    return {
      flowOption
    }
  },
  methods: {
    getFlowData () {
      return new Promise((resolve, reject) => {
        // 请求数据
        this.getFlowChartData().then(response => {
          // 渲染表格
          var data = JSON.parse(response)
          this.flowOption.xAxis.data = data.dates
          this.flowOption.series = []
          data.subjects.forEach(function (subject) {
            this.flowOption.series.push({
              name: subject.name,
              type: 'line',
              data: subject.data
            })
          }, this)
          resolve(this.flowOption)
        }, error => {
          this.$message.error('获取图标失败')
          console.log(error)
        })
      })
    }
  }
}
