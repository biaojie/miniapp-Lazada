// pages/myFollow/myFollow.js
Page({

  data: {
  
  },

  onLoad: function (options) {
  
  },
  personalpage: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/personalpage/personalpage?id='+id,
    })
  }
  
})