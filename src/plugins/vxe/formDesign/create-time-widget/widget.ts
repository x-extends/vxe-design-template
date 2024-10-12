import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetCreateTimeProps {
  format: string
}

export const getFormDesignWidgetCreateTimeConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetCreateTimeProps> => {
  return {
    // 控件名称
    title: '创建时间',
    // 自定义控件字段名
    field: 'createTime',
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
