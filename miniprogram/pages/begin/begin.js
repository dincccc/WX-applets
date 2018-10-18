// miniprogram/pages/begin/begin.js
var uitl = require('../../uitls/uitls.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    items: [
      { 
        index: 1,
        note: "示例文字",
        time: "2018-10-18 16:21:23"
      },
    ],
    noteIndex: 2,
  },
  //获取输入框中的值
  inputSomething: function(e){
   // console.log(e.detail.value)
    this.setData({
      inputVal: e.detail.value
    })
   // console.log(this.data.inputVal)
  },
  //新增一条记录
  addNewItem: function(e) {
    console.log(this.data.inputVal);
    var noteIndex = this.data.noteIndex++; //获取当前的index值
    var inputVal = this.data.inputVal;     //获取当前的input中的值
    let time = uitl.formatTime(new Date());
    //组成新的数组
    var newNotes = [{
      index: noteIndex,
      note: inputVal,
      time: time
    }];
   // console.table(newNotes)
   // 新数组与旧数组连接
    this.data.items = this.data.items.concat(newNotes)
   // console.table(this.data.items)
   // 刷新data重新渲染
    this.setData({
      items: this.data.items,
      inputVal: ''
    })
  },
  //删除当前记录
  removeNote: function(e){
    let index = e.currentTarget.dataset.index
    this.data.items.splice(index,1)
    // console.log(index)
    // console.table(this.data.items)
    this.setData({
      items: this.data.items
    })
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