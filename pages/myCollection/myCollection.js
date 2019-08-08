// pages/myCollection/myCollection.js
Page({

  data: {
    tabclass:['tabed','tab'],
    id: 0,
  },

  onLoad: function (options) {
  
  },
  tabClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var tabclass = ['tab','tab'];
    tabclass[id] = 'tabed';
    this.setData({
      tabclass: tabclass,
      id: id,
    })
  },
  informationContent: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/informationContent/informationContent?id=' + id,
    })
  }

})