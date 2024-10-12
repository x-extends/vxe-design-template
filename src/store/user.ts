import XEUtils from 'xe-utils'
import { defineStore } from 'pinia'
import { VxeMenuPropTypes } from 'vxe-pc-ui'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      activeUserTab: '',
      userTabs: [] as any[],
      menuTreeList: [
        {
          icon: 'vxe-icon-feedback',
          name: '1',
          title: '表单设计器',
          children: [
            { icon: 'vxe-icon-feedback', title: '表单设计', name: 'FormDesignEdit', routerLink: { name: 'FormDesignEdit' } },
            { icon: 'vxe-icon-feedback', title: '首页设计', name: 'HomeDesignEdit', routerLink: { name: 'HomeDesignEdit' } }
          ]
        },
        {
          icon: 'vxe-icon-feedback',
          name: '2',
          title: '列表设计器',
          children: []
        },
        {
          icon: 'vxe-icon-feedback',
          name: '3',
          title: '流程设计器',
          children: []
        },
        {
          icon: 'vxe-icon-feedback',
          name: '4',
          title: '打印设计器',
          children: []
        }
      ] as VxeMenuPropTypes.Options
    }
  },
  getters: {},
  actions: {
    /**
     * 清除登录信息
     */
    clearLogin () {
      this.clearUserTabs()
    },
    /**
     * 清除所有页签
     */
    clearUserTabs () {
      this.activeUserTab = ''
      this.userTabs = []
    },
    /**
     * 更新页签
     * @param tab
     */
    updateUserTabs (tab: {
      path: string
      name: any
      routeName: any
      query: any
      params: any
    }) {
      if (!this.userTabs.some(item => item.name === tab.name)) {
        this.userTabs.push({
          name: tab.name,
          routeName: tab.routeName,
          path: tab.path,
          query: tab.query,
          params: tab.params
        })
      }
      this.activeUserTab = tab.name
    },
    /**
     * 关闭页签
     * @param tab
     * @returns
     */
    removeUserTab (tab: {
      name: any
    }) {
      const index = XEUtils.findIndexOf(this.userTabs, item => item.name === tab.name)
      if (index > -1) {
        if (tab.name === this.activeUserTab) {
          const nextItem = this.userTabs[index + 1] || this.userTabs[index - 1]
          if (nextItem) {
            this.activeUserTab = nextItem.name
            this.userTabs.splice(index, 1)
            return nextItem
          }
        }
        this.userTabs.splice(index, 1)
      }
      return null
    },
    /**
     * 清除页签
     * @param type
     */
    clearUserTab (type: 'closeOther' | 'closeLeft' | 'closeRight') {
      const index = XEUtils.findIndexOf(this.userTabs, item => item.name === this.activeUserTab)
      switch (type) {
        case 'closeOther':
          this.userTabs = this.userTabs.filter(item => item.name === this.activeUserTab)
          break
        case 'closeLeft':
          this.userTabs = this.userTabs.slice(index)
          break
        case 'closeRight':
          this.userTabs = this.userTabs.slice(0, index + 1)
          break
      }
    }
  }
})
