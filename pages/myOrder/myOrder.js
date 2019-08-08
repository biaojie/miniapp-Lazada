// pages/myOrder/myOrder.js
Page({

  data: {
    tabclass: ['naved', 'nav', 'nav', 'nav'],
    id:0,
  },

  onLoad: function (options) {
  
  },

  tabClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var tabclass = ['nav', 'nav', 'nav', 'nav'];
    tabclass[id] = 'naved';
    this.setData({
      tabclass: tabclass,
      id: id,
    })
  },

  orderDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/orderDetails/orderDetails?id='+id,
    })
  }
})