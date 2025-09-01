<template>
  <vxe-form-item class="module-widget-form-item" :field="currWidget.field" :padding="isViewMode">
    <ECharts :options="chartOptions"></ECharts>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetPieChartProps } from './widget'
import ECharts from '@/components/ECharts.vue'

const { useWidgetView } = VxeUI.formDesignHandleHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetPieChartProps>>,
    default: () => ({})
  }
})

const { currWidget, isViewMode } = useWidgetView<FormDesignWidgetPieChartProps>(props)

const chartOptions = ref()
const loading = ref(false)

const loadData = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    chartOptions.value = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: '16',
        top: '16'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          center: ['40%', '50%'],
          data: [
            { value: 148, name: '18岁以下' },
            { value: 735, name: '19~25岁' },
            { value: 1048, name: '26~35岁' },
            { value: 484, name: '35岁以上' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }, 100)
}

loadData()
</script>
