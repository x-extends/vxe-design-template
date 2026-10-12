<template>
  <div :key="currViewKey" :class="['page-view', {'is-full': isFull, 'is-pg': padding, 'is-bg': background}]">
    <slot></slot>
    <vxe-loading :modelValue="loading" :text="loadingText"></vxe-loading>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  loading: Boolean,
  loadingText: String,
  isFull: Boolean,
  padding: {
    type: Boolean,
    default: true
  },
  background: {
    type: Boolean,
    default: true
  }
})

const currViewKey = ref(0)
</script>

<style lang="scss" scoped>
.page-view {
  position: relative;
  min-width: 800px;
  border-radius: 6px;
  &.is-full {
    height: 100%;
    overflow: auto;
  }
  &.is-pg {
    padding: 16px;
  }
  &.is-bg {
    background-color: var(--page-layout-body-background-color);
  }
}
</style>
