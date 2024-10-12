<template>
  <div class="page-header">
    <div class="header-left">
      <vxe-button class="collapseBtn" mode="text" :icon="appStore.collapseAside ? 'vxe-icon-menu-unfold' : 'vxe-icon-menu-fold'" @click="appStore.toggleCollapseAside()"></vxe-button>
    </div>
    <div class="header-right">
      <span class="right-item">
        <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-form-design-template" target="_blank">Github</vxe-link>
        <vxe-link href="https://gitee.com/x-extends/vxe-form-design-template" target="_blank">
          <vxe-icon status="error" name="gitee-fill"></vxe-icon>
          <span>Gitee</span>
        </vxe-link>
      </span>

      <span class="right-item">
        <vxe-switch
          class="right-item-comp"
          v-model="currTheme"
          size="mini"
          open-value="light"
          open-label="白天"
          close-value="dark"
          close-label="夜间">
        </vxe-switch>
      </span>

      <span class="right-item">
        <vxe-pulldown :options="langPullList" trigger="click" class="right-item-comp" show-popup-shadow transfer  @option-click="langOptionClickEvent">
          <vxe-button mode="text" icon="vxe-icon-language-switch" :content="langLabel"></vxe-button>
        </vxe-pulldown>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeGlobalI18nLocale, VxePulldownEvents } from 'vxe-pc-ui'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const langPullList = ref([
  { label: '中文', value: 'zh-CN' },
  { label: '英文', value: 'en-US' }
])

const langLabel = computed(() => {
  const item = langPullList.value.find(item => item.value === appStore.language)
  return item ? item.label : appStore.language
})

const currTheme = computed({
  get () {
    return appStore.theme
  },
  set (name) {
    appStore.setTheme(name)
  }
})

const langOptionClickEvent: VxePulldownEvents.OptionClick = ({ option }) => {
  appStore.setLanguage(option.value as VxeGlobalI18nLocale)
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid var(--page-layout-border-color);

  .header-left {
    flex-grow: 1;
  }

  .header-right {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
  }

  .right-item {
    cursor: pointer;
    margin-left: 24px;
  }
  .right-item-title {
    vertical-align: middle;
  }

  .right-item-comp {
    vertical-align: middle;
  }

  .user-avatar {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .user-picture {
    width: 24px;
    height: 24px;
    margin: 0 2px;
  }

  .collapseBtn {
    font-size: 18px;
  }
}
</style>
