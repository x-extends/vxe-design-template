import { createRouter, createWebHashHistory } from 'vue-router'
import { routeConfigs } from './config'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { routeToMenuName } from '@/utils'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeConfigs
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach((to) => {
  const appStore = useAppStore()
  const userStore = useUserStore()
  // 更新页签
  userStore.updateUserTabs({
    path: to.fullPath,
    routeName: to.name,
    name: routeToMenuName(to),
    query: to.query,
    params: to.params
  })
  // 更新标题
  appStore.updatePageTitle(to)
  NProgress.done()
})

export default router
