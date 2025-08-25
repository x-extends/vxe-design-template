import { RouteRecordRaw } from 'vue-router'

import UserLayout from '@/views/layout/UserLayout.vue'

export const routeConfigs: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'FormDesignEdit'
    }
  },
  {
    path: '/form-design',
    component: UserLayout,
    children: [
      {
        path: 'formEdit',
        name: 'FormDesignEdit',
        component: () => import('../views/form-design/FormDesignEdit.vue'),
        meta: {
          title: '表单设计'
        }
      },
      {
        path: 'homeEdit',
        name: 'HomeDesignEdit',
        component: () => import('../views/form-design/HomeDesignEdit.vue'),
        meta: {
          title: '首页设计'
        }
      }
    ]
  },
  {
    path: '/list-design',
    component: UserLayout,
    children: [
      {
        path: 'listEdit',
        name: 'ListDesignEdit',
        component: () => import('../views/list-design/ListDesignEdit.vue'),
        meta: {
          title: '列表设计'
        }
      }
    ]
  },
  {
    path: '/404',
    name: 'PageError404',
    component: () => import('../views/error/PageError404.vue'),
    meta: {
      title: '404 找不到页面'
    }
  },
  {
    path: '/403',
    name: 'PageError403',
    component: () => import('../views/error/PageError403.vue'),
    meta: {
      title: '403 无权限访问'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'PageError404'
    }
  }
]
