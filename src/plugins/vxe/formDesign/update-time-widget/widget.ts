import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetUpdateTimeProps {
  format: string
}

export const getFormDesignWidgetUpdateTimeConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetUpdateTimeProps> => {
  return {
    // 控件名称
    title: '更新时间',
    // 自定义控件字段名
    field: 'updateTime',
    // 限制唯一控件
    unique: true,
    // 控件图标
    icon: 'vxe-icon-time',
    // 控件参数，用于在右侧配置
    options: {
      format: ''
    }
  }
}
