// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    click:true,
    imgList:[
      '/images/huangjinshidai.jpg',
      '/images/longmao.jpg',
      '/images/dayuhaitang.jpg',
      '/images/shanheguren.jpg',
      '/images/wozaigugongxiuwenwu.jpg',
      '/images/ying.jpg'
    ],
    autoplay: false,
    indicatordots: true,
    duration: 500
  },
  
  onLoad: function () {
    // var that = this;
    // var videoUrl = "请求的接口地址";
    // Api.http(videoUrl, (res) => {
    //   that.setData({
    //     hidden: true,
    //     imgList: res,
    //   })
    // })
  },
  onSlideChange: function (event) { 
     var postId = event.detail.current; 
     console.log(postId);
  },
   change: function (e) {
    // var click = this.data.click;
    var id = e.currentTarget.dataset.id
    // this.setData({
    //   click: false
    // })
    // setTimeout(function () {
      // wx.redirectTo({
      //   url: '/pages/gain',
      // })
      if (id==0){ 
        wx.navigateTo({
         url: '/pages/six/0',
        })
      }
      if (id==1) {
        wx.navigateTo({
          url: '/pages/six/1',
        })
      }
      if (id==2) {
        wx.navigateTo({
          url: '/pages/six/2',
        })
      }if (id==3) {
        wx.navigateTo({
          url: '/pages/six/3',
        })
      }if (id==4) {
        wx.navigateTo({
          url: '/pages/six/4',
        })
      }
      if (id==5) {
        wx.navigateTo({
          url: '/pages/six/5',
        })
      }
    },
   
  // dispath:function(e){
  //   var click = this.data.click;
  //   this.setData({
  //     click: false
  //   })
  //   // if ("/images/huangjinshidai.jpg"==e.currentTarget.dataset.text){ 
  //     wx.navigateTo({
  //      url: '/pages/gain',
  //     })
  //   // }
  //   if ("'/images/longmao.jpg'" == e.currentTarget.dataset.text) {
  //     wx.navigateTo({
  //       url: '/pages/my',
  //     })
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})