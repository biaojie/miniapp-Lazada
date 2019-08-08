// pages/releaseInformation/releaseInformation.js
Page({

  data: {
    imgs: [],
  },

  onLoad: function (options) {
  
  },

  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    var imgsleng = imgs.length
    console.log(imgsleng)
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 9) {
            that.setData({
              imgs: imgs
            });
            return false;
          } else {
            imgs.push(tempFilePaths[i]);

          }
        }
        console.log(imgs);
        that.setData({
          imgs: imgs
        });
      }
    });
  },
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    console.log(index)
    //所有图片
    var imgs = this.data.imgs;

    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    console.log(e.currentTarget.dataset.index)
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },
  communityClassification: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/communityClassification/communityClassification?id=' + id,
    })
  },
})