<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <span v-if="isViewMode">{{ dateLabel }}</span>
    <span v-else class="create-time-widget-placeholder">系统自动生成</span>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetCreateTimeProps } from './widget'
import XEUtils from 'xe-utils'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetCreateTimeProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetOptions, widgetModel, isViewMode } = useWidgetView<FormDesignWidgetCreateTimeProps>(props)

const dateLabel = computed(() => {
  const widgetOpts = widgetOptions.value
  return XEUtils.toDateString(widgetModel.value, widgetOpts.format)
})
</script>

<style lang="scss" scoped>
.create-time-widget-placeholder {
  color: #c0c4cc;
}
</style>
