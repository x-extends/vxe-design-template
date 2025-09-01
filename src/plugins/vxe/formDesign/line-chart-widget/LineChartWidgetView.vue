<template>
  <vxe-form-item class="module-widget-form-item" :field="currWidget.field" :padding="isViewMode">
    <ECharts :options="chartOptions"></ECharts>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetLineChartProps } from './widget'
import ECharts from '@/components/ECharts.vue'

const { useWidgetView } = VxeUI.formDesignHandleHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetLineChartProps>>,
    default: () => ({})
  }
})

const { currWidget, isViewMode } = useWidgetView<FormDesignWidgetLineChartProps>(props)

const chartOptions = ref()
const loading = ref(false)

const loadData = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    chartOptions.value = {
      grid: {
        left: '15%',
        right: '10%'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['9点', '11点', '13点', '15点', '17点', '19点', '20点']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '平均流量',
          type: 'line',
          data: [1240, 81245, 13257, 88115, 31278, 9902, 2300]
        },
        {
          name: '流量峰值',
          type: 'line',
          data: [865, 21245, 9257, 18115, 19278, 4002, 2070]
        }
      ]
    }
  }, 100)
}

loadData()
</script>
