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
  </vxe-form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetLineChartProps } from './widget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetLineChartProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetOptions } = useWidgetView<FormDesignWidgetLineChartProps>(props)
</script>
