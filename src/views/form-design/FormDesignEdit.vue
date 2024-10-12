<template>
  <div>
    <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" height="100%" show-mobile />
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeFormDesignInstance, VxeFormDesignPropTypes } from 'vxe-pc-ui'

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
      'VxeRadioGroup', 'VxeCheckboxGroup'
    ]
  },
  {
    group: 'system',
    children: [
    ]
  },
  {
    group: 'advanced',
    children: [
      'VxeUploadFile', 'VxeUploadImage'
    ]
  },
  {
    customGroup: '更多控件',
    children: [
    ]
  }
])
</script>
