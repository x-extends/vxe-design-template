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
import { VxeUI } from 'vxe-pc-ui'
import { VxeFormDesignInstance, VxeFormDesignPropTypes } from 'vxe-design'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'layout',
    children: [
      'title',
      'row',
      'subtable'
    ]
  },
  {
    group: 'base',
    children: [
      'VxeInput', 'VxeTextarea', 'VxeNumberInput',
      'VxeDatePicker',
      'VxeSelect',
      'VxeSwitch',
      'VxeRadioGroup', 'VxeCheckboxGroup',
      'VxeRate', 'VxeSlider',
      'VxeUploadImage', 'VxeUploadFile'
    ]
  },
  {
    group: 'system',
    children: [
      'CreateByWidget', 'UpdateByWidget',
      'CreateTimeWidget', 'UpdateTimeWidget'
    ]
  },
  {
    group: 'advanced',
    children: [
      'WangEditorWidget'
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
    const defData = localStorage.getItem('DATA_FormDesignEdit')
    let defJson = { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: true, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: true, mobileVertical: true, mobileTitleBold: true, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100270, field: 'row100270', title: '一行多列', name: 'row', required: false, hidden: false, options: { colSize: 2, colSpan: '12,12' }, children: [{ id: 100271, field: 'VxeInput100271', title: '输入框', name: 'VxeInput', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100272, field: 'VxeTextarea100272', title: '文本域', name: 'VxeTextarea', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }], model: { update: false, value: null } }, { id: 100275, field: 'row100275', title: '一行多列', name: 'row', required: false, hidden: false, options: { colSize: 2, colSpan: '12,12' }, children: [{ id: 100276, field: 'VxeDatePicker100276', title: '日期', name: 'VxeDatePicker', required: false, hidden: false, options: { placeholder: '', defaultValue: { type: '', value: '' } }, children: [], model: { update: false, value: null } }, { id: 100277, field: 'VxeNumberInput100277', title: '数字', name: 'VxeNumberInput', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }], model: { update: false, value: null } }, { id: 100278, field: 'VxeTextarea100278', title: '文本域', name: 'VxeTextarea', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }] }
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
  localStorage.removeItem('DATA_FormDesignEdit')
}

const saveEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    localStorage.setItem('DATA_FormDesignEdit', JSON.stringify($formDesign.getConfig()))
    VxeUI.modal.message({
      content: '保存成功',
      status: 'success'
    })
  }
}
</script>
