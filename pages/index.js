Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  },
  onSlideChange: function (event) { 
     var postId = event.detail.current; 
     console.log(postId);
  },
   change: function (e) {
    var id = e.currentTarget.dataset.id
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