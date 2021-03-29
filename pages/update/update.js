// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false




    keyInfo: {
      keyName: '',
      password: '',
      account: '',
      url: '',
      back: '',
      userId: '',
      categroy: '',
      loginIdRules: {
        type: 'email',
        required: true,
        message: '邮箱地址不合法',
        trigger: 'change'
      },
      passwordRules: [
        { required: true, message: '请输入登录密码', trigger: 'blur' },
        { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
        { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成', trigger: 'blur' }
      ],
    }


  },
  //添加钥匙信息
  submit: function (e) {
    console.log(e.detail.values)
    const id = wx.getStorageSync('keyId')
    console.log(id)
    /*
      detail 返回三个参数
      1、values: 各表单项的value值
      2、errors: 各表单项验证后的返回的错误信息数组
      3、isValidate: 表单是否验证通过的boolean值
      具体格式示例：
      detail = {
         values: {
             studentName: "",
             studentAge: "",
             studentAddress: ""
         },
         errors: {
             studentName: [],
             studentAge: [],
             studentAddress: []
         },
         isValidate: true
      }
    */
   const userId = wx.getStorageSync('userId')
    wx.request({
      url: app.globalData.base + '/key/update',
      method: 'POST',
      data: {
        id: id,
        keyName: e.detail.values.keyName,
        account: e.detail.values.account,
        password: e.detail.values.password,
        url: e.detail.values.url,
        back: e.detail.values.back,
        categroy: 0,
        userId: userId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res)
        if (res.data !== true) {
          //保存失败
          wx.showToast({
            title: '更新失败，请重试！',
            icon: 'none',
            // image:'/assets/img/warning.jpg',
            duration: 2000
          })
        } else {
          //保存成功，返回首页
          wx.showToast({
            title: '更新成功！',
            icon: 'none',
            // image:'/assets/img/warning.jpg',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                //要延时执行的代码
                wx.navigateTo({
                  url: '/pages/list/list',
                })
              }, 2000)
            }
          })
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
    var that = this
    wx.lin.initValidateForm(this)
    //根据id得到钥匙信息并显示
    const id = wx.getStorageSync('keyId')
    wx.request({
      url: app.globalData.base + '/key/get/' + id,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        var keyName = 'keyInfo.keyName'
        var account = 'keyInfo.account'
        var password = 'keyInfo.password'
        var url = 'keyInfo.url'
        var back = 'keyInfo.back'
        console.log(res)
        that.setData({
          [keyName]: res.data.KeyName,
          [account]:res.data.Account,
          [password]:res.data.Password,
          [url]:res.data.Url,
          [back]:res.data.Back
        })
      }
    })
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
