// pages/addStaff/addStaff.js
Page({

  data: {
    items: [
      { name: 'xsls', value: '销售流水' },
      { name: 'ddhx', value: '订单核销' },
      { name: 'psqd', value: '配送抢单' },
      { name: 'ddck', value: '订单查看' },
      { name: 'dygl', value: '店员管理' },
      { name: 'syewm', value: '收银二维码' },
    ]
  },

  onLoad: function (options) {
  
  },
  confirm: function() {
    wx.navigateTo({
      url: '/pages/staffManagement/staffManagement',
    })
  }
})