import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetCreateTimeConfig } from './widget'
import CreateTimeWidgetView from './CreateTimeWidgetView.vue'
import CreateTimeWidgetProps from './CreateTimeWidgetProps.vue'

// 创建表单设计器控件 - 创建时间
VxeUI.renderer.add('CreateTimeWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetCreateTimeConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <CreateTimeWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <CreateTimeWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
