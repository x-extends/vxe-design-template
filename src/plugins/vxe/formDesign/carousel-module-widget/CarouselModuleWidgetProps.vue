<template>
  <vxe-form
    vertical
    title-bold
    title-overflow
    span="24"
    :data="widgetOptions">
    <vxe-form-item title="控件名称">
      <vxe-input v-model="currWidget.title"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="排版方式">
      <vxe-radio-group v-model="widgetOptions.vertical" :options="layoutList"></vxe-radio-group>
    </vxe-form-item>
    <vxe-form-item title="显示指示器">
      <vxe-switch v-model="widgetOptions.showIndicators"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="是否自动切换">
      <vxe-switch v-model="widgetOptions.autoPlay"></vxe-switch>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetCarouselModuleProps } from './widget'

const { useWidgetView } = VxeUI.formDesignHandleHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetCarouselModuleProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetOptions } = useWidgetView<FormDesignWidgetCarouselModuleProps>(props)

const layoutList = ref([
  { label: '横向', value: false },
  { label: '纵向', value: true }
])
</script>
