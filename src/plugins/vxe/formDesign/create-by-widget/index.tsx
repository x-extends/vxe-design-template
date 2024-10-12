import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetCreateByConfig } from './widget'
import CreateByWidgetView from './CreateByWidgetView.vue'
import CreateByWidgetProps from './CreateByWidgetProps.vue'

// 创建表单设计器控件 - 创建人
VxeUI.renderer.add('CreateByWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetCreateByConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <CreateByWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <CreateByWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
