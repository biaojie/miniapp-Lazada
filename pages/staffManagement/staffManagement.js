// pages/staffManagement/staffManagement.js
Page({

  data: {
    carts:[{
      id:1,
      name:'姓名',
      phonenum:'12254139899',
      selected:false,
    }, {
      id: 2,
      name: '姓名2',
      phonenum: '12254139899',
      selected: false,
    }],
    items: [
      { name: 'xsls', value: '销售流水', checked:'true'},
      { name: 'ddhx', value: '订单核销', checked: 'true'},
      { name: 'psqd', value: '配送抢单', checked: 'true' },
      { name: 'ddck', value: '订单查看', checked: 'true'},
      { name: 'dygl', value: '店员管理', checked: 'true'},
      { name: 'syewm', value: '收银二维码', checked: 'true' },
    ]
  },

  onLoad: function (options) {
  
  },
  selectList: function (e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected; 
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
  },
  deleteList: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.setData({
      carts: carts
    })
  },
  addStaff: function (e) {
    wx.navigateTo({
      url: '/pages/addStaff/addStaff',
    })
  }
  
})