<template>
  <PageView>
    <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" height="100%">
      <template #extra>
        <vxe-button status="error" @click="clearEvent">清空</vxe-button>
        <vxe-button status="success" @click="saveEvent">保存</vxe-button>
      </template>
    </vxe-form-design>
  </PageView>
</template>

<script lang="tsx" setup>
import { ref, onMounted } from 'vue'
import { VxeUI, VxeFormDesignInstance, VxeFormDesignPropTypes } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'layout',
    children: [
      'row'
    ]
  },
  {
    group: 'module',
    children: [
      'CarouselModuleWidget'
    ]
  },
  {
    group: 'chart',
    children: [
      'LineChartWidget', 'PieChartWidget'
    ]
  },
  {
    customGroup: '更多控件',
    children: [
    ]
  }
])

onMounted(() => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    const defData = localStorage.getItem('DATA_HomeDesignEdit')
    let defJson = { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: true, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: true, mobileVertical: true, mobileTitleBold: true, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100034, field: 'CarouselModuleWidget100034', title: '轮播图', name: 'CarouselModuleWidget', required: false, hidden: false, options: { formId: '', formField: '', showIndicators: false, vertical: false, autoPlay: true }, children: [], model: { update: false, value: null } }, { id: 100037, field: 'row100037', title: '一行多列', name: 'row', required: false, hidden: false, options: { colSize: 2, colSpan: '12,12' }, children: [{ id: 100038, field: 'LineChartWidget100038', title: '折线图', name: 'LineChartWidget', required: false, hidden: false, options: {}, children: [], model: { update: false, value: null } }, { id: 100039, field: 'PieChartWidget100039', title: '饼图', name: 'PieChartWidget', required: false, hidden: false, options: {}, children: [], model: { update: false, value: null } }], model: { update: false, value: null } }] }
    if (defData) {
      try {
        defJson = JSON.parse(defData)
      } catch (e) {
        console.error(e)
      }
    }
    $formDesign.loadConfig(defJson)
  }
})

const clearEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    $formDesign.clearConfig()
  }
  localStorage.removeItem('DATA_HomeDesignEdit')
}

const saveEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    localStorage.setItem('DATA_HomeDesignEdit', JSON.stringify($formDesign.getConfig()))
    VxeUI.modal.message({
      content: '保存成功',
      status: 'success'
    })
  }
}
</script>
