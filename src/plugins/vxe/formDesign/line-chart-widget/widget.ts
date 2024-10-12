import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetLineChartProps {
}

export const getFormDesignWidgetLineChartConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetLineChartProps> => {
  return {
    // 控件名称
    title: '折线图',
    // 控件图标
    icon: 'vxe-icon-chart-line',
    // 控件参数，用于在右侧配置
    options: {
    }
  }
}
