<template>
  <PageView>
    <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" height="100%" show-mobile />
  </PageView>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeFormDesignInstance, VxeFormDesignPropTypes } from 'vxe-pc-ui'

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
    ]
  },
  {
    group: 'chart',
    children: [
    ]
  },
  {
    customGroup: '更多控件',
    children: [
    ]
  }
])
</script>
