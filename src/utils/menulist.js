const menu = '[\n' +
  '  {\n' +
  '    "icon": "iconfont icon-dashboard",\n' +
  '    "name": "主页",\n' +
  '    "path": "/dashboard"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-guide",\n' +
  '    "name": "导航",\n' +
  '    "path": "/guide"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-auth",\n' +
  '    "name": "权限",\n' +
  '    "path": "/auth"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-images",\n' +
  '    "name": "图片",\n' +
  '    "path": "/images"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-practical",\n' +
  '    "name": "实用工具",\n' +
  '    "path": "/practical"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-chart",\n' +
  '    "name": "图表",\n' +
  '    "path": "/chart"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-table",\n' +
  '    "name": "表格",\n' +
  '    "path": "/table",\n' +
  '    "sub": [\n' +
  '      {\n' +
  '        "name": "动态表格",\n' +
  '        "path": "/table/dyn"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "拖拽表格",\n' +
  '        "path": "/table/drag"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "可编辑表格",\n' +
  '        "path": "/table/edit"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "综合表格",\n' +
  '        "path": "/table/comprehensive"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-artical",\n' +
  '    "name": "文章",\n' +
  '    "path": "/artical",\n' +
  '    "sub": [\n' +
  '      {\n' +
  '        "name": "文章列表",\n' +
  '        "path": "/artical/list"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "发表文章",\n' +
  '        "path": "/artical/publish"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-tab",\n' +
  '    "name": "页签",\n' +
  '    "path": "/tab"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-excel",\n' +
  '    "name": "excel",\n' +
  '    "path": "/excel"\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-errorpage",\n' +
  '    "name": "错误页",\n' +
  '    "path": "/errorpage",\n' +
  '    "sub": [\n' +
  '      {\n' +
  '        "name": "404",\n' +
  '        "path": "/errorpage/404"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "501",\n' +
  '        "path": "/errorpage/501"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "icon": "iconfont icon-info",\n' +
  '    "name": "个人中心",\n' +
  '    "path": "/info",\n' +
  '    "sub": [\n' +
  '      {\n' +
  '        "name": "个人信息",\n' +
  '        "path": "/info/center"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "安全认证",\n' +
  '        "path": "/info/security"\n' +
  '      }\n' +
  '    ]\n' +
  '  }\n' +
  ']'
const menulist = JSON.parse(menu)
export default {
  data () {
    return {
      menulist
    }
  }
}
