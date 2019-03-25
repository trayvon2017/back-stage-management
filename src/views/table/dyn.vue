<template>
  <div class="table-dyn">
    <div class="dyn-table">
      <el-tag class="dyn-tag">固定表头顺序</el-tag>
      <div class="check-group">
        <el-checkbox-group
          v-model="checkList">
          <el-checkbox label="名字"></el-checkbox>
          <el-checkbox label="地址"></el-checkbox>
        </el-checkbox-group>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="日期" width="300"></el-table-column>
        <el-table-column
          v-for="col in cols.filter( v=> checkList.includes(v.label))"
          :prop="col.prop"
          :label="col.label"
          :key="col.prop"
          width="300">
        </el-table-column>
      </el-table>
    </div>
    <div class="dyn-table">
      <el-tag class="dyn-tag" type="success">不固定表头顺序</el-tag>
      <div class="check-group">
        <el-checkbox-group
          v-model="checkList2">
          <el-checkbox @change="changeName" label="名字"></el-checkbox>
          <el-checkbox @change="changeAddress" label="地址"></el-checkbox>
        </el-checkbox-group>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="日期" width="300"></el-table-column>
        <el-table-column
          v-for="col in cols2"
          :prop="col.prop"
          :label="col.label"
          :key="col.prop"
          width="300">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dyn',
  data () {
    return {
      checkList: ['名字', '地址'],
      checkList2: ['名字', '地址'],
      cols: [
        {prop: 'name', label: '名字'},
        {prop: 'address', label: '地址'}
      ],
      cols2: [
        {prop: 'name', label: '名字'},
        {prop: 'address', label: '地址'}
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    changeName (flag) {
      this.changeCols2({prop: 'name', label: '名字'}, flag)
    },
    changeAddress (flag) {
      this.changeCols2({prop: 'address', label: '地址'}, flag)
    },
    changeCols2 (obj, flag) {
      !flag ? this.cols2.splice(this.cols2.findIndex(v => obj.prop === v.prop), 1)
        : this.cols2.push(obj)
    }
  }
}
</script>

<style scoped>
  .dyn-tag {
    margin-top: 20px;
    padding: 0 20px;
  }
  .check-group {
    margin: 20px 0;
  }
</style>
