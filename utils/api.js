import { fetch } from './fetch..js'
const URI = 'https://api.zbztb.cn/api/public/v1'

// 获取轮播图
function getBanner() {
  return fetch(URI, 'home/swiperdata')
}
// 获取导航菜单
function getCatitems() {
  return fetch(URI, 'home/catitems')
}
//获取楼层
function getFloorData() {
  return fetch(URI, 'home/floordata')
}
//获取分类数据
function getCategory() {
  return fetch(URI, 'categories')
}
export default {
  getBanner,
  getCatitems,
  getFloorData,
  getCategory
}
