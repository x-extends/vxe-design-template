import { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

/**
 * 转换指定路由名称
 * @param item
 * @returns
 */
export function routeToMenuName (route: RouteLocationNormalizedLoadedGeneric) {
  return String(route.name)
}

/**
 * 转换路由配置名称
 * @param item
 * @returns
 */
export function routeConfigToMenuName (item: any) {
  return item.routeName
}
