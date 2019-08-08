// pages/personalpage/personalpage.js
Page({

  data: {
  
  },

  onLoad: function (options) {
  
  },
  informationContent: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/informationContent/informationContent?id='+id,
    })
  }
})