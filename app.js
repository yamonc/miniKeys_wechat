// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    tabBarSelected:0,
    theme: 'light', // dark
    resultLists:[],
    resultNumbers:-1,
    selectIndex:-1,
    base:"http://localhost:8080",
    inventPrincipleSelectId:0,
    physicalConflictsSelectedId:1,
    materialFieldAnalysisId:'',
    commonFunctionSearchEffectName:'',
    moduleNumber: '',
    routeNumber: '',
    stateNumber: '',
  },
})
