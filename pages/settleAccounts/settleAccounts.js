// pages/settleAccounts/settleAccounts.js
Page({

  data: {
    array: ['新春大派送卷 -10元', '新春大派送卷 -20元', '新春大派送卷 -30元', '新春大派送卷 -40元'],
    index:0,
    tabclass:['tabed','tab','tab'],
    tab:0,
    date:'选择配送时间',
    time:'20:00',
    modeid: false
  },

  onLoad: function (options) {
    
  },
  myAddress: function () {
    wx.navigateTo({
      url: '/pages/myAddress/myAddress',
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  tabClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var tabclass = ['tab','tab','tab'];
    tabclass[id] = 'tabed';
    this.setData({
      tab : id,
      tabclass: tabclass
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  mode: function () {
    if(this.data.modeid){
      this.setData({
        modeid: false
      })
    }else{
      this.setData({
        modeid: true
      })
    }
  }
})