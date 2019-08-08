// pages/informationContent/informationContent.js
Page({

  data: {
    comment:false,
  },

  onLoad: function (options) {
  
  },

  comment: function() {
    if (this.data.comment){
      this.setData({
        comment: false
      })
    }else{
      this.setData({
        comment: true
      })
    }
  }
})