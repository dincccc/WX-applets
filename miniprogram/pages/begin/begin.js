// miniprogram/pages/begin/begin.js
var uitl = require('../../uitls/uitls.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    items: [],
    // hideCount: 1,
    // unloadCount: 1
  },
  //获取输入框中的值
  inputSomething: function(e) {
    // console.log(e.detail.value)
    this.setData({
      inputVal: e.detail.value
    })
    // console.log(this.data.inputVal)
  },
  //新增一条记录
  addNewItem: function(e) {
    var inputVal = this.data.inputVal; //获取当前的input中的值
    //组成新的数组
    if (inputVal) {
      console.log(this.data.inputVal);
      let time = uitl.formatTime(new Date());
      // var newNotes = [{
      //   note_title: inputVal,
      //   note_time: time,
      //   note_content: '待补充',
      //   note_remarks: ['']
      // }];
      // // console.table(newNotes)
      // // 新数组与旧数组连接
      // this.data.items = this.data.items.concat(newNotes)
      // // console.table(this.data.items)
      // // 刷新data重新渲染
      this.setData({
        //items: this.data.items,
        inputVal: ''
      })

      //存储到数据库中
      const db = wx.cloud.database()
      db.collection('allnotes').add({
        data: {
          note_title: inputVal,
          note_content: '待补充',
          note_time: time,
          note_remarks: ['']
        },
        success: res => {
          this.onLoad()
          wx.showToast({
            title: '添加成功',
          })

          console.log(res)
        }
      })
    } else {
      wx.showToast({
        title: '不能为空',
      })
    }
  },
  //删除当前记录
  removeNote: function(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    //console.table(this.data.items)
    const db = wx.cloud.database()
    db.collection('allnotes').doc(index).remove({
      success: res => {
        this.onLoad()
        wx.showToast({
          title: '删除成功',
        })

      },
      fail: err => {
        wx.showToast({
          title: '删除失败' + err.errMsg,
        })
        console.log(err.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    //从数据库中读取数据
    const db = wx.cloud.database()
    db.collection('allnotes').get({
      success: res => {
        _this.setData({
          items: res.data
        })
      }
    })
    //console.log(this.items)
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
    // this.setData({
    //   hideCount: this.data.hideCount++
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    // this.setData({
    //   unloadCount: this.data.unloadCount++
    // })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.onLoad()
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