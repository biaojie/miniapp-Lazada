// pages/mine/mine.js
Page({

  data: {
  
  },
  onLoad: function (options) {
  
  },
  myOrder: function() {
    wx.navigateTo({
      url: '/pages/myOrder/myOrder',
    })
  },
  myIntegral: function () {
    wx.navigateTo({
      url: '/pages/myIntegral/myIntegral',
    })
  },
  coupan: function () {
    wx.navigateTo({
      url: '/pages/coupan/coupan',
    })
  },
  myRelease: function() {
    wx.navigateTo({
      url: '/pages/myRelease/myRelease',
    })
  },
  myAddress: function () {
    wx.navigateTo({
      url: '/pages/myAddress/myAddress',
    })
  },
  business: function () {
    wx.navigateTo({
      url: '/pages/business/business',
    })
  },
  myBalance: function () {
    wx.navigateTo({
      url: '/pages/myBalance/myBalance',
    })
  },
  myFollow: function () {
    wx.navigateTo({
      url: '/pages/myFollow/myFollow',
    })
  },
  myCollection: function () {
    wx.navigateTo({
      url: '/pages/myCollection/myCollection',
    })
  },
  sign: function () {
    wx.navigateTo({
      url: '/pages/sign/sign',
    })
  }

})