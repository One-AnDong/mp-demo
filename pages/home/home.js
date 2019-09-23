// pages/home/home.js
let app = getApp()

Page({
  data: {
    bannerData: [],
    catitemsData: [],
    floorData: []
  },
  onLoad: async function(options) {
    await app.api.getBanner().then(res => {
      this.setData({
        bannerData: res.data.message
      })
    })
    await app.api.getCatitems().then(res => {
      this.setData({
        catitemsData: res.data.message
      })
    })
    await app.api.getFloorData().then(res => {
      this.setData({
        floorData: res.data.message
      })
    })
  }
})
