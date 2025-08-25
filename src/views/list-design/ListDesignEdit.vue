<template>
  <div>
    <div class="row-wrapper">
      <vxe-tip status="success" title="列表设计器步骤">
        <div>第一步，拖拽创建可视化表单 JSON，再传给列表设计器</div>
        <div>第二步，根据 Form JSON 生成表单视图</div>
        <div>第三步，根据 Form JSON 拖拽创建可视化列表</div>
        <div>第四步，根据 List JSON 生成列表视图</div>
      </vxe-tip>

      <vxe-tabs v-model="selectTab" trigger="manual" padding>
        <vxe-tab-pane title="第一步，创建JSON" name="1">
          <vxe-form-design ref="formDesignRef" :height="800" show-mobile>
            <template #header>
              <div style="text-align: right;">
                <vxe-button status="primary" @click="formNextEvent">下一步</vxe-button>
                <vxe-button status="warning">重置</vxe-button>
              </div>
            </template>
          </vxe-form-design>
        </vxe-tab-pane>

        <!-- <vxe-tab-pane title="第二步，预览视图" name="2">
          <vxe-form-view v-model="formData" :config="formDesignConfig" @submit="submitEvent">
            <template #header>
              <div style="text-align: right;">
                <vxe-button status="primary" @click="listNextEvent">下一步</vxe-button>
              </div>
            </template>
            <template #footer>
              <div v-if="formDesignConfig">
                <vxe-button type="submit" status="primary" content="提交"></vxe-button>
                <vxe-button type="reset" content="重置"></vxe-button>
              </div>
            </template>
          </vxe-form-view>
        </vxe-tab-pane> -->

        <vxe-tab-pane title="第二步，根据表单 JSON 创建列表设计器" name="2">
          <vxe-list-design ref="listDesignRef" :height="800" show-mobile>
            <template #header>
              <div style="width: 100%;text-align: right;">
                <vxe-button status="primary" @click="listNextEvent">保存</vxe-button>
              </div>
            </template>
          </vxe-list-design>
        </vxe-tab-pane>
      </vxe-tabs>

      <vxe-modal v-model="showPreview" title="预览视图" width="800" height="800">
        <div>新增/编辑页面预览</div>
        <div style="border: 3px solid red;">
          <vxe-form-view ref="formViewRef" v-model="formData" :config="formDesignConfig" @submit="submitEvent">
            <template #footer>
              <div style="width: 100%;text-align: center;">
                <vxe-button type="submit" status="primary" content="保存"></vxe-button>
                <vxe-button type="reset" content="重置"></vxe-button>
              </div>
            </template>
          </vxe-form-view>
        </div>

        <div>列表页面预览<vxe-button status="primary" @click="loadList()">刷新页面</vxe-button></div>
        <div style="border: 3px solid blue;">
          <vxe-list-view ref="listViewRef" height="300" :config="listDesignConfig" :grid-options="gridOptions"></vxe-list-view>
        </div>
      </vxe-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeFormDesignInstance, VxeListDesignInstance, VxeListDesignPropTypes, VxeFormDesignPropTypes, VxeListViewPropTypes, VxeListViewInstance } from 'vxe-design'
import { VxeUI } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()
const formDesignConfig = ref<VxeFormDesignPropTypes.Config>()
const formData = ref({})

const listDesignRef = ref<VxeListDesignInstance>()
const listDesignConfig = ref<VxeListDesignPropTypes.Config>()

const listViewRef = ref<VxeListViewInstance>()

const selectTab = ref('1')
const showPreview = ref(false)

const allList: any[] = []

// 模拟后端接口
const findPageList = (pageSize: number, currentPage: number) => {
  console.log(`调用查询接口 pageSize=${pageSize} currentPage=${currentPage}`)
  return new Promise<{
    result: any[]
    page: {
      total: number
    }
  }>(resolve => {
    setTimeout(() => {
      resolve({
        result: allList.slice((currentPage - 1) * pageSize, currentPage * pageSize),
        page: {
          total: allList.length
        }
      })
    }, 100)
  })
}

const gridOptions = reactive<VxeListViewPropTypes.GridOptions>({
  showOverflow: true,
  showFooter: false,
  height: '100%',
  pagerConfig: {
    pageSize: 5,
    pageSizes: [5, 10, 15]
  },
  proxyConfig: {
    response: {
      total: 'page.total',
      result: 'result'
    },
    ajax: {
      query ({ page }) {
        // 默认接收 Promise<{ result: [], page: { total: 100 } }>
        return findPageList(page.pageSize, page.currentPage)
      }
    }
  }
})

const formNextEvent = async () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    const designConfig = $formDesign.getConfig()
    if (designConfig.widgetData?.length) {
      selectTab.value = '2'
      await nextTick()
      // 将表单设计的 json 赋值给列表设计器
      formDesignConfig.value = designConfig
      const $listDesign = listDesignRef.value
      if ($listDesign) {
        $listDesign.loadFormDesignConfig(designConfig)
      }
    } else {
      VxeUI.modal.message({
        content: '请从左侧拖拽配置表单字段',
        status: 'error'
      })
    }
  }
}

const listNextEvent = () => {
  const $listDesign = listDesignRef.value
  if ($listDesign) {
    const designConfig = $listDesign.getConfig()
    listDesignConfig.value = designConfig
    VxeUI.modal.message({
      content: 'json 保存完成',
      status: 'success'
    })
    console.log('表单 JSON：', formDesignConfig.value)
    console.log('列表 JSON：', listDesignConfig.value)

    showPreview.value = true
  }
}

const submitEvent = () => {
  VxeUI.modal.message({
    content: '保存成功',
    status: 'success'
  })
  console.log('新增数据：', formData.value)

  // 模拟后端保存
  allList.push(formData.value)
  formData.value = {}
}

const loadList = () => {
  // 刷新列表页面
  const $listView = listViewRef.value
  if ($listView) {
    $listView.commitProxy('reload')
  }
}
</script>
