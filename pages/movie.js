//https://douban.uieee.com/v2/movie/subject/:id
//https://douban.uieee.com/v2/movie/subject/1292720
///v2/movie/subject/:id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var that = this;
    // console.log(params);
    wx.showToast({
      title: '加载中..',
      icon:"loading",
      duration:20000
    });

    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/'+params.id,
      data:{},
      header:{
        "Content-Type": "application/text"
      },
      success:function(res){
        // console.log(res.data)
        wx.hideToast({
          complete: (res) => {},
        })
        that.setData({
          movie:res.data
        })
      }
    })
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