import { createRouter, createWebHashHistory } from 'vue-router'
import { routeConfigs } from './config'
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
  const userStore = useUserStore()
  // 更新页签
  userStore.updateUserTabs({
    path: to.fullPath,
    routeName: to.name,
    name: routeToMenuName(to),
    query: to.query,
    params: to.params
  })
  NProgress.done()
})

export default router
