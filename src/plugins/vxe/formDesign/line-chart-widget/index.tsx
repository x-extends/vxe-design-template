import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetLineChartConfig } from './widget'
import LineChartWidgetView from './LineChartWidgetView.vue'
import LineChartWidgetProps from './LineChartWidgetProps.vue'

// 创建表单设计器控件 - 饼图
VxeUI.renderer.add('LineChartWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetLineChartConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <LineChartWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <LineChartWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
