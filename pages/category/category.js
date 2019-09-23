// pages/category/category.js
let app = getApp()
Page({
  data: {
    listData: [],
    goodsData: [],
    current: 0
  },
  cateData: [],
  onLoad: function() {
    this.loadData()
  },
  loadData() {
    //加载数据
    let mpdemo = wx.getStorageSync('mpdemo')
    console.log(mpdemo)
    let flag = true
    if (mpdemo && Date.now() - mpdemo.time < 60 * 1000) {
      flag = false
      this.setCategoryData(mpdemo.data)
    }

    flag && this.getData()
  },
  async getData() {
    //请求获取数据
    console.log('day')
    let res = await app.api.getCategory()
    const { message } = res.data
    this.setCategoryData(message)
    wx.setStorageSync('mpdemo', {
      data: message,
      time: Date.now()
    })
  },
  formateList(data) {
    //获取分类列表
    return data.map(_ => _.cat_name)
  },
  getGoods() {
    //获取分类商品
    const index = this.data.current
    return this.cateData[index].children
  },
  handleClick(event) {
    //点击切换分类
    const { index } = event.target.dataset
    this.setData({
      current: index
    })
    this.loadData()
  },
  setCategoryData(_data) {
    this.cateData = _data
    const listData = this.formateList(_data)
    const goodsData = this.getGoods()
    this.setData({
      listData,
      goodsData
    })
  }
})
