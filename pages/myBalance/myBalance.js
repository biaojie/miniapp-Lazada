// pages/myBalance/myBalance.js
Page({

  data: {
  
  },

  onLoad: function (options) {
  
  },
  Recharge: function () {
    wx.navigateTo({
      url: '/pages/Recharge/Recharge',
    })
  },
  Withdrawals: function () {
    wx.navigateTo({
      url: '/pages/Withdrawals/Withdrawals',
    })
  }

})