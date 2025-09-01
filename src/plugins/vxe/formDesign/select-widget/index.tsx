// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetSelectConfig } from './widget'
import SelectWidgetView from './SelectWidgetView.vue'
import SelectWidgetProps from './SelectWidgetProps.vue'

// 创建表单设计器控件 - 下拉框
VxeUI.renderer.add('SelectWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetSelectConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <SelectWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <SelectWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
