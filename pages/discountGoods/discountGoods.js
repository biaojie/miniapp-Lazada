// pages/discountGoods/discountGoods.js
Page({

  data: {
    array: ['全部分类','肉类'],
    index:0,
    array2: ['默认排序', '肉类'],
    index2: 0,
    array3: ['筛选', '肉类'],
    index3: 0,
    addnum:0,
  },

  onLoad: function (options) {
  
  },

  change: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  change2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  change3: function (e) {
    this.setData({
      index3: e.detail.value
    })
  },
  addGood: function () {
    var addnum = this.data.addnum;
    addnum ++;
    this.setData({
      addnum: addnum,
    })
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    })
    

  }
})