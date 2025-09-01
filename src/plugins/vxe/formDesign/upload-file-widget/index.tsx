// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetUploadFileConfig } from './widget'
import UploadFileWidgetView from './UploadFileWidgetView.vue'
import UploadFileWidgetProps from './UploadFileWidgetProps.vue'

// 创建表单设计器控件 - 上传附件
VxeUI.renderer.add('UploadFileWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetUploadFileConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <UploadFileWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <UploadFileWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
