// pages/noteDetails/noteDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
        productid: 1,
        title: "NOX-MAN",
        background: 'red',
      },
      {
        productid: 2,
        title: "FOX-CASH",
        background: 'rgb(162,200,20)',
      },
      {
        productid: 3,
        title: "DOS-LIAS",
        background: 'rgb(233,122,45)',
      }
    ], //初始化一个 banners 数组
    //以下四项设置 swiper 组件的参数值
    indicatorDots: true,
    indicatorColor: 'rgba(0,0,0,.3)',
    autoplay: true, //开启自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    exampleItems: [{
      exTitle: 'LOXning',
      exBackcolor: '#ccc',
      exLink: '',
      exInfo: "lorem for wx i can't use,so bad!And you know nothing Jhon Snow"
    }, {
      exTitle: 'FOEker',
      exBackcolor: 'blue',
      exLink: '',
      exInfo: "lorem for wx i can't use,so bad!"
    }, {
      exTitle: 'XALrrr',
      exBackcolor: '#fe5edd',
      exLink: '',
      exInfo: "lorem for wx i can't use,so bad!"
    }, {
      exTitle: 'LORemem',
      exBackcolor: 'yellow',
      exLink: '',
      exInfo: "lorem for wx i can't use,so bad!"
    }]

  },
  /**
   * 测试获取远程数据
   */
  getSomething: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})