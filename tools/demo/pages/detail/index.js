Page({
  data: {
    proxyBack: false,
    navBarHeight: 0
  },
  handleProxyChange(evt) {
    this.setData({
      proxyBack: evt.detail.value
    })
  },
  handleNavigateBack() {
    wx.showModal({
      title: '本页面未加入收藏',
      content: '是否将本页面加入收藏',
      success: res => {
        if (res.confirm) {
          // 加入收藏
        }
      },
      complete: () => {
        wx.navigateBack()
      }
    })
  },
  getNavBarHeight(evt) {
    this.setData({
      navBarHeight: evt.detail
    })
  }
})
