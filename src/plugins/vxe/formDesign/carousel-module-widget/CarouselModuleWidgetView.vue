<template>
  <vxe-form-item class="module-widget-form-item" :field="currWidget.field" :padding="isViewMode">
    <vxe-carousel
      class="carousel-module"
      height="340"
      :options="carouselList"
      :show-indicators="widgetOptions.showIndicators"
      :vertical="widgetOptions.vertical"
      :auto-play="widgetOptions.autoPlay">
    </vxe-carousel>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetCarouselModuleProps } from './widget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetCarouselModuleProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetOptions, isViewMode } = useWidgetView<FormDesignWidgetCarouselModuleProps>(props)

const carouselList = ref([
  { name: '1', url: 'https://vxeui.com/resource/img/fj586.png' },
  { name: '2', url: 'https://vxeui.com/resource/img/fj843.jpg' },
  { name: '3', url: 'https://vxeui.com/resource/img/fj579.png' }
])
</script>

<style lang="scss" scoped>
.carousel-module {
  ::v-deep(img) {
    width: 100%;
    height: 100%;
  }
}
</style>
