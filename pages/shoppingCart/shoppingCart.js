// pages/shoppingCart/shoppingCart.js
Page({

  data: {
    totalPrice:'0.00',
    selectAllStatus:false,
    scarts:[{
      sgoodimg:'http://a.hiphotos.baidu.com/image/h%3D300/sign=71f6f27f2c7f9e2f6f351b082f31e962/500fd9f9d72a6059f550a1832334349b023bbae3.jpg',
      sctitle:'猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉',
      scoldprice:33,
      scprice:'22.23',
      sbottom:'22.23',
      id:1,
      selected:false,
      num: 1,
    },
      {
        sgoodimg: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=71f6f27f2c7f9e2f6f351b082f31e962/500fd9f9d72a6059f550a1832334349b023bbae3.jpg',
        sctitle: '猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉猪肉',
        scoldprice: 33,
        scprice: 22,
        sbottom: '22.00',
        id:2,
        selected: false,
        num: 1,
      }]    
  },

  onLoad: function (options) {
  
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let scarts = this.data.scarts;
    const selected = scarts[index].selected;
    scarts[index].selected = !selected;
    this.setData({
      scarts: scarts
    });
    this.getTotalPrice();
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let scarts = this.data.scarts;
    for (let i = 0; i < scarts.length; i++){
      scarts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      scarts: scarts,
    })
    this.getTotalPrice();
  },
  deleteList: function (e) {
    const index = e.currentTarget.dataset.index;
    let scarts = this.data.scarts;
    scarts.splice(index,1);
    this.setData({
      scarts: scarts
    });
    this.getTotalPrice();
  },
  addCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let scarts = this.data.scarts;
    let num = scarts[index].num;
    num += 1;
    scarts[index].num = num;

    let litiletotal = 0;
    litiletotal = scarts[index].scprice * num
    scarts[index].sbottom = litiletotal.toFixed(2);
    this.setData({
      scarts: scarts
    });
    this.getTotalPrice();
  },
  minusCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let scarts = this.data.scarts;
    let num = scarts[index].num;
    if(num <=1 ){
      return false;
    }
    num -= 1;
    scarts[index].num = num;
    let litiletotal = 0;
    litiletotal = parseFloat(scarts[index].scprice) * num;
    scarts[index].sbottom = litiletotal.toFixed(2);
    this.setData({
      scarts: scarts
    });
    this.getTotalPrice();
  },
  getTotalPrice: function () {
    let scarts = this.data.scarts;
    let total = 0;
    for (let i = 0; i < scarts.length; i++){
      if (scarts[i]. selected){
        
        total += parseFloat(scarts[i].sbottom);
      }
      
    }
    this.setData({
      scarts: scarts,
      totalPrice: total.toFixed(2)
    })
  },
  settleAccounts: function () {
    wx.navigateTo({
      url: '/pages/settleAccounts/settleAccounts',
    })
  }
})