import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetPieChartProps {
}

export const getFormDesignWidgetPieChartConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetPieChartProps> => {
  return {
    // 控件名称
    title: '饼图',
    // 控件图标
    icon: 'vxe-icon-chart-pie',
    // 控件参数，用于在右侧配置
    options: {
    }
  }
}
