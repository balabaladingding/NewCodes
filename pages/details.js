Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"加载中...",
    movies:[]
  },

  onLoad:function(){
    var that = this;
  wx.showToast({
    title: '加载中..',
    icon:"loading",
    duration:20000
  });

  wx.request({
    url: 'https://douban.uieee.com/v2/movie/top250',
    data:{},
    header:{
      "Content-Type": "application/text"
    },
    success:function(res){
      wx.hideToast({
        complete: (res) => {},
      })
      var data = res.data;
      that.setData({
        title:data.title,
        movies:data.subjects
      })
      console.log(data);
    },
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