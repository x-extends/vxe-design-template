<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <span v-if="isViewMode">{{ widgetModel }}</span>
    <span v-else class="update-by-widget-placeholder">系统自动生成</span>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetUpdateByProps } from './widget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetUpdateByProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel, isViewMode } = useWidgetView<FormDesignWidgetUpdateByProps>(props)
</script>

<style lang="scss" scoped>
.update-by-widget-placeholder {
  color: #c0c4cc;
}
</style>
