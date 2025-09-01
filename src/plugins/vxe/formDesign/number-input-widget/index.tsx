// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetNumberInputConfig } from './widget'
import NumberInputWidgetView from './NumberInputWidgetView.vue'
import NumberInputWidgetProps from './NumberInputWidgetProps.vue'

// 创建表单设计器控件 - 多行输入
VxeUI.renderer.add('NumberInputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetNumberInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <NumberInputWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <NumberInputWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
