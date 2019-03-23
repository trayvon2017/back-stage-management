<template>
    <div>
      <div class="button-group">
        <el-row>
          <el-button type="primary" @click="setFlowChart" :disabled="active ==='flow'">流量来源</el-button>
          <el-button type="success" @click="setAssementChart" :disabled="active ==='assement'">销售评估</el-button>
          <el-button type="warning" @click="setProductChart" :disabled="active ==='products'">产品构成</el-button>
        </el-row>
      </div>
      <div class="chartPanel" ref="mainChart"></div>
    </div>
</template>

<script>
import flow from '../chartoptions/flow.js'
import assement from '../chartoptions/assement.js'
import products from '../chartoptions/products.js'
import echarts from 'echarts'
export default {
  mixins: [flow, assement, products],
  name: 'dashboard',
  data () {
    return {
      mainChart: null,
      datalist: [],
      option: null,
      active: 'flow'
    }
  },
  created () {
  },
  mounted () {
    console.log(this.option)
    this.mainchart = echarts.init(this.$refs.mainChart)
    this.setFlowChart()
    window.onresize = e => {
      this.mainchart.resize()
    }
  },
  methods: {
    setFlowChart () {
      this.getFlowData().then(option => {
        this.active = 'flow'
        this.option = option
        this.mainchart.setOption(this.option, true)
      })
    },
    setAssementChart () {
      this.getAssementData().then(option => {
        this.active = 'assement'
        this.option = option
        this.mainchart.setOption(this.option, true)
      })
    },
    setProductChart () {
      this.getProductsData().then(option => {
        this.active = 'products'
        this.option = option
        this.mainchart.setOption(this.option, true)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .chartPanel{
    width: 80%;
    height: 600px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>
