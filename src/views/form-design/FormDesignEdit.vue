<template>
  <PageView>
    <vxe-tip status="success" title="表单设计器步骤">
      <div>第一步，拖拽创建可视化表单 JSON，再传给列表设计器</div>
      <div>第二步，根据 Form JSON 生成表单视图</div>
    </vxe-tip>

    <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :form-render="{name: 'MyDesignForm'}" height="100%">
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
      'InputWidget', 'TextareaWidget', 'NumberInputWidget', 'AmountInputWidget',
      'DateDatePickerWidget',
      'SelectWidget',
      'UploadFileWidget', 'UploadImageWidget'
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
    let defJson = { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: true, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: false, mobileVertical: true, mobileTitleBold: true, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100064, field: 'InputWidget100064', title: '单行输入', name: 'InputWidget', required: false, hidden: false, options: { placeholder: '请输入', maxLength: 0, showWordCount: false, clearable: true, align: '' }, children: [], model: { update: false, value: null } }, { id: 100072, field: 'row100072', title: '一行多列', name: 'row', required: false, hidden: false, options: { colSize: 2, colSpan: '12,12' }, children: [{ id: 100065, field: 'NumberInputWidget100065', title: '数值输入', name: 'NumberInputWidget', required: false, hidden: false, options: { placeholder: '请输入', clearable: true, type: 'number', controlConfig: { showButton: true, layout: 'right' }, digits: 2, min: null, max: null, step: null, align: '' }, children: [], model: { update: false, value: null } }, { id: 100066, field: 'AmountInputWidget100066', title: '金额输入', name: 'AmountInputWidget', required: false, hidden: false, options: { placeholder: '请输入', clearable: true, controlConfig: { showButton: true, layout: 'right' }, digits: 2, min: null, max: null, step: null, showCurrency: true, align: '' }, children: [], model: { update: false, value: null } }], model: { update: false, value: null } }, { id: 100067, field: 'TextareaWidget100067', title: '多行输入', name: 'TextareaWidget', required: false, hidden: false, options: { placeholder: '请输入', showWordCount: false, minRows: 2, maxRows: 4, clearable: true }, children: [], model: { update: false, value: null } }, { id: 100069, field: 'UploadFileWidget100069', title: '上传附件', name: 'UploadFileWidget', required: false, hidden: false, options: { buttonText: '', multiple: false, limitCount: 20, limitSize: 50 }, children: [], model: { update: false, value: null } }, { id: 100068, field: 'UploadImageWidget100068', title: '上传图片', name: 'UploadImageWidget', required: false, hidden: false, options: { buttonText: '', multiple: false, limitCount: 9, limitSize: 3 }, children: [], model: { update: false, value: null } }] }
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
