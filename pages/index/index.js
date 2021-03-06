// index.js
// 获取应用实例
const app = getApp()
import deviceUtil from "../../miniprogram_npm/lin-ui/utils/device-util"
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    capsuleBarHeight: deviceUtil.getNavigationBarHeight(),
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/icons/tab-bar/index.png",
        selectedIconPath: "../../miniprogram_npm/lin-ui/icons/tab-bar/index-selected.png"
      }
    ],
    password: ''
  },

  //登录
  submit:function(e) {
    // wx.navigateTo({
    //   url: '/pages/list/list'
    // })
    const that = this
    if (e.detail.values.password.length===0){
      wx.showToast({
        title: '输入密码不能为空，请重试！',
        icon: 'none',
        // image:'/assets/img/warning.jpg',
        duration: 2000
      })
      return 
    }
    wx.request({
      url: app.globalData.base + '/user/login',
      method: 'POST',
      data: {
        password: e.detail.values.password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res)
        wx.setStorageSync('userId', res.data.id)
        if(res.data.error){
          wx.showToast({
            title: '没有对应的密码信息，请重试！',
            icon: 'none',
            // image:'/assets/img/warning.jpg',
            duration: 2000
          })
        }else{
          if (res.statusCode == 200) {
            wx.setStorageSync('userId', res.data.id);
            wx.navigateTo({
              url: '/pages/list/list'
            })
          } else if (res.statusCode == 500) {
            wx.showToast({
              title: '服务器错误，请重试！',
              icon: 'none',
              // image:'/assets/img/warning.jpg',
              duration: 2000
            })
          }
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    wx.lin.initValidateForm(this)
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
