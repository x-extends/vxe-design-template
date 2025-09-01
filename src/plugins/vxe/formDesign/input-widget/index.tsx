// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetInputConfig } from './widget'
import InputWidgetView from './InputWidgetView.vue'
import InputWidgetProps from './InputWidgetProps.vue'

// 创建表单设计器控件 - 单行输入
VxeUI.renderer.add('InputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <InputWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <InputWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
