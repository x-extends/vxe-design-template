<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <span v-if="isViewMode">{{ dateLabel }}</span>
    <span v-else class="update-time-widget-placeholder">系统自动生成</span>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetUpdateTimeProps } from './widget'
import XEUtils from 'xe-utils'

const { useWidgetView } = VxeUI.formDesignHandleHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetUpdateTimeProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetOptions, widgetModel, isViewMode } = useWidgetView<FormDesignWidgetUpdateTimeProps>(props)

const dateLabel = computed(() => {
  const widgetOpts = widgetOptions.value
  return XEUtils.toDateString(widgetModel.value, widgetOpts.format)
})
</script>

<style lang="scss" scoped>
.update-time-widget-placeholder {
  color: #c0c4cc;
}
</style>
