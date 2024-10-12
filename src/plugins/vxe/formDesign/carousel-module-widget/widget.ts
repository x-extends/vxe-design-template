import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetCarouselModuleProps {
  formId: string
  formField: string
  showIndicators: boolean
  vertical: boolean
  autoPlay: boolean
}

export const getFormDesignWidgetCarouselModuleConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetCarouselModuleProps> => {
  return {
    // 控件名称
    title: '轮播图',
    // 控件图标
    icon: 'vxe-icon-carousel',
    // 控件参数，用于在右侧配置
    options: {
      formId: '',
      formField: '',
      showIndicators: false,
      vertical: false,
      autoPlay: true
    }
  }
}
