// pages/salesWater/salesWater.js
Page({

  data: {
    tabclass:['naved','nav'],
    id: 0,
    timeclass:['timed','time','time'],
    time: 0,
    array: ['2018年/02月', '2018年/03月', '2018年/04月', '2018年/05月'],
    index:0,
  },

  onLoad: function (options) {
  
  },
  tabClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var tabclass = ['nav','nav'];
    tabclass[id] = 'naved';
    this.setData({
      tabclass: tabclass,
      id: id
    })
  },
  timeClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var timeclass = ['time','time','time'];
    timeclass[id] = 'timed';
    this.setData({
      timeclass: timeclass,
      time: id,
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  orderD: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/orderD/orderD?id='+id,
    })
  }
})