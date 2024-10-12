import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetCreateByProps {
}

export const getFormDesignWidgetCreateByConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetCreateByProps> => {
  return {
    // 控件名称
    title: '创建人',
    // 自定义控件字段名
    field: 'createBy',
    // 限制唯一控件
    unique: true,
    // 控件图标
    icon: 'vxe-icon-user',
    // 控件参数，用于在右侧配置
    options: {
    }
  }
}
