// pages/orderRemind/orderRemind.js
Page({

  data: {
    carts: [{
      id: 1,
      cimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1436948145,4270509323&fm=200&gp=0.jpg',
      ctitle: '猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪',
      cprice: 28.00,
      ctype: '在线下单',
      ctime: '2018-02-02 18:00',
      cstate: '等待发货',
      selected: false,
    }, {
      id: 2,
      cimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1436948145,4270509323&fm=200&gp=0.jpg',
      ctitle: '猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪',
      cprice: 28.00,
      ctype: '在线下单',
      ctime: '2018-02-02 18:00',
      cstate: '等待发货',
      selected: false,
    }],
    selectAllStatus: false,
  },

  onLoad: function (options) {
  
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    console.log("index" + index)
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
  },
  orderDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/orderDetails/orderDetails?id=' + id,
    })
  },
})