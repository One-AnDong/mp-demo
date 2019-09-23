let count = 0 //记录请求发起次数
export const fetch = (api, path, params, method = 'GET') => {
  //显示加载框
  wx.showLoading({
    title: '正在加载',
    mask: true
  })
  count++
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}/${path}`,
      method,
      data: Object.assign({}, params),
      success: resolve,
      fill: reject,
      complete: () => {
        count--
        count === 0 && wx.hideLoading()
      }
    })
  })
}
