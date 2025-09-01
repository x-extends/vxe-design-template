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
    <vxe-form-item title="显示格式">
      <vxe-select v-model="widgetOptions.format" :options="formatOptions"></vxe-select>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetUpdateTimeProps } from './widget'

const { useWidgetView } = VxeUI.formDesignHandleHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetUpdateTimeProps>>,
    default: () => ({})
  }
})
const { currWidget, widgetOptions } = useWidgetView<FormDesignWidgetUpdateTimeProps>(props)

const formatOptions = ref([
  { label: '年-月-日', value: 'yyyy-MM-dd' },
  { label: '年-月-日 时:分', value: 'yyyy-MM-dd HH:mm' },
  { label: '年-月-日 时:分:秒', value: '' }
])
</script>
