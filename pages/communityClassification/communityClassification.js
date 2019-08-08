// pages/communityClassification/communityClassification.js
Page({

  data: {
    send: false,
  },

  onLoad: function (options) {
  
  },

  informationContent: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/informationContent/informationContent?id=' + id,
    })
  },
  Release: function() {
    if(this.data.send){
      this.setData({
        send: false
      })
    }else{
      this.setData({
        send: true
      })
    }
  },
  releaseInformation: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/releaseInformation/releaseInformation?id=' + id,
    })
  },
})