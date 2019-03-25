<template>
  <div class="table-drag">
    <h1>drag</h1>
    <div class="drag-table">
      <el-table
        highlight-current-row
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="500">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import requestApi from '../../service/login/login.js'
import Sortable from 'sortablejs'
export default {
  mixins: [requestApi],
  name: 'drag',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableData('drag').then(response => {
      this.tableData = response.tabledata
    })
  },
  mounted () {
    var el = document.querySelector('.el-table__body-wrapper>table>tbody')
    Sortable.create(el, {
      onChoose: function (ev) {
      },
      onEnd: function (ev) {
        console.log(ev.to)
        console.log(ev.from)
        console.log(ev.oldIndex)
        console.log(ev.newIndex)
      }
    })
  }
}
</script>

<style>
  .sortable-ghost{
    opacity: .8;
    color: #ffffff !important;
    background-color: #42b983 !important;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: transparent !important;
  }
</style>
