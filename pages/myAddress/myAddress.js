// pages/myAddress/myAddress.js
Page({

  data: {
     showhide: false,
     
  },

  onLoad: function (options) {
  
  },

  addadr: function() {
    if (this.data.showhide){
      this.setData({
        showhide: false,
      })
    }else{
      this.setData({
        showhide: true,
      })
    }
  },
  // iaddr: function (e) {
  //   var iaddr = e.detail.value;
  //   console.log("iaddr"+iaddr)
  // },
  // iroomnum: function (e) {
  //   var iroomnum = e.detail.value;
  //   console.log("iroomnum" + iroomnum)
  // },
  // icontacts: function (e) {
  //   var icontacts = e.detail.value;
  //   console.log("icontacts" + icontacts)
  // },
  // iphonenum: function (e) {
  //   var iphonenum = e.detail.value;
  //   console.log("iphonenum" + iphonenum)
  // },
  saveadd: function (e) {
    var iaddr = e.detail.value.iaddr;
    console.log("iaddr" + iaddr)
    var iroomnum = e.detail.value.iroomnum;
    console.log("iroomnum" + iroomnum)
    var icontacts = e.detail.value.icontacts;
    console.log("icontacts" + icontacts)
    var iphonenum = e.detail.value.iphonenum;
    console.log("iphonenum" + iphonenum)
    this.setData({
      iaddr: iaddr,
      iroomnum: iroomnum,
      icontacts: icontacts,
      iphonenum: iphonenum,
    })
  },
  save: function () {
    this.setData({
      showhide: false,
    })
  },
})