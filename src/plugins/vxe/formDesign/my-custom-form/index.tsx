import { VxeUI } from 'vxe-pc-ui'
import { MyDesignFormData } from './data'
import MyDesignFormProps from './MyDesignFormProps.vue'

// 创建表单设计器控件 - 自定义表单
VxeUI.renderer.add('MyDesignForm', {
  // 表单设计器 - 自定义的表单数据（会跟内置的混合在一起）
  createFormDesignSettingFormConfig () {
    const formData: MyDesignFormData = {
      isLog: false,
      isPC: true,
      isMobile: false,
      isApplet: false
    }
    return formData
  },
  // 表单设计器 - 渲染控件右侧的表单属性设置
  renderFormDesignSettingFormView (renderOpts, renderParams) {
    return <MyDesignFormProps render-opts={renderOpts} render-params={renderParams} />
  }
})
