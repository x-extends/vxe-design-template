import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetCarouselModuleConfig } from './widget'
import CarouselModuleWidgetView from './CarouselModuleWidgetView.vue'
import CarouselModuleWidgetProps from './CarouselModuleWidgetProps.vue'

// 创建表单设计器控件 - 轮播图
VxeUI.renderer.add('CarouselModuleWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetCarouselModuleConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <CarouselModuleWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <CarouselModuleWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
