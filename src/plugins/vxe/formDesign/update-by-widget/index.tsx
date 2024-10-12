import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetUpdateByConfig } from './widget'
import UpdateByWidgetView from './UpdateByWidgetView.vue'
import UpdateByWidgetProps from './UpdateByWidgetProps.vue'

// 创建表单设计器控件 - 更新人
VxeUI.renderer.add('UpdateByWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetUpdateByConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <UpdateByWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <UpdateByWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
