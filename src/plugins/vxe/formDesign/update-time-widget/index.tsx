import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetUpdateTimeConfig } from './widget'
import UpdateTimeWidgetView from './UpdateTimeWidgetView.vue'
import UpdateTimeWidgetProps from './UpdateTimeWidgetProps.vue'

// 创建表单设计器控件 - 更新时间
VxeUI.renderer.add('UpdateTimeWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetUpdateTimeConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <UpdateTimeWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <UpdateTimeWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
