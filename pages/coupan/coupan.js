// pages/coupan/coupan.js
Page({

  data: {
    tabclass: ['naved','nav'],
    id: 0,
  },

  onLoad: function (options) {
  
  },

  tabClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var tabclass = ['nav','nav'];
    tabclass[id] = 'naved';
    this.setData({
      tabclass: tabclass,
      id: id,
    })
  },
  discountGoods: function (){
    wx.navigateTo({
      url: '/pages/discountGoods/discountGoods',
    })
  }
})