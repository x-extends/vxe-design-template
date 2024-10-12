import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetPieChartConfig } from './widget'
import PieChartWidgetView from './PieChartWidgetView.vue'
import PieChartWidgetProps from './PieChartWidgetProps.vue'

// 创建表单设计器控件 - 饼图
VxeUI.renderer.add('PieChartWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetPieChartConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <PieChartWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <PieChartWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
