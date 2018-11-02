// pages/chanIndex/chanIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据
    carBox: [{
        imgUrl: '../../c-imgs/banner-01.jpg',
        linkTo: '',
        imgAlt: 'banner-01',
      }, {
        imgUrl: '../../c-imgs/banner-01.jpg',
        linkTo: '',
        imgAlt: 'banner-01',
      },
      {
        imgUrl: '../../c-imgs/banner-01-xx.jpg',
        linkTo: '',
        imgAlt: 'banner-01',
      },
      {
        imgUrl: '../../c-imgs/banner-01-xx.jpg',
        linkTo: '',
        imgAlt: 'banner-01',
      },
      {
        imgUrl: '../../c-imgs/banner-01-xx.jpg',
        linkTo: '',
        imgAlt: 'banner-01',
      }
    ],
    //四个版块入口
    fourItems: [{
        name: "景区",
        url: "#",
        imgUrl: "../../c-imgs/scenic-icon.png"
      },
      {
        name: "住宿",
        url: "#",
        imgUrl: "../../c-imgs/live-icon.png"
      },
      {
        name: "攻略",
        url: "#",
        imgUrl: "../../c-imgs/raiders-icon.png"
      },
      {
        name: "购物",
        url: "#",
        imgUrl: "../../c-imgs/shopping-icon.png"
      },
    ]
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

  },
})