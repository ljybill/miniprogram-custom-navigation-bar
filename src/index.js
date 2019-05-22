/* eslint-disable object-curly-spacing */
/* eslint-disable no-console */
import {
  getStatusBarHeight,
  isIos,
  removeRouteSuffix,
  isFirstLevelPage
} from './util'

const _barHeight = getStatusBarHeight()
const _isIos = isIos()
let _isIntoFromIndex =
  __wxConfig.tabBar.list.length > 0
    ? __wxConfig.tabBar.list.some(
      tab => removeRouteSuffix(tab.pagePath) ===
          removeRouteSuffix(__wxConfig.appLaunchInfo.path)
    )
    : removeRouteSuffix(__wxConfig.appLaunchInfo.path) ===
      removeRouteSuffix(__wxConfig.entryPagePath)

Component({
  properties: {
    title: {
      type: String,
      value: '默认标题默认标题' // maxLength: 8
    },
    defaultHeight: {
      type: Boolean,
      value: false
    },
    proxyBack: {
      type: Boolean,
      value: false
    }
  },
  data: {
    barHeight_px: _barHeight,
    isIos: _isIos,
    contentPadding_px: _isIos ? 6 : 8,
    isShowHome: !_isIntoFromIndex,
    isShowBack: false
  },
  methods: {
    /**
     * trigger一个事件
     * @param {Object} evt - 事件对象
     * @param {String} evt.name - 事件名
     * @param {*} evt.value - 事件携带的值
     */
    trigger({ name = '', value = {} } = {}) {
      if (!name) {
        throw new TypeError('name不能为空')
      }
      console.log(`触发${name}事件,value为${JSON.stringify(value)}`)
      this.triggerEvent(name, value)
    },
    handleBack() {
      if (this.data.proxyBack) {
        this.trigger({
          name: 'navigateBack'
        })
      } else {
        wx.navigateBack()
      }
    },
    handleHome() {
      _isIntoFromIndex = true
      wx.reLaunch({
        url: `/${removeRouteSuffix(__wxConfig.entryPagePath)}`
      })
    }
  },
  ready() {
    this.setData({
      isShowBack: !isFirstLevelPage()
    })
    this.trigger({
      name: 'navBarHeight',
      value: this.data.barHeight_px + this.data.contentPadding_px * 2 + 32
    })
  },
  pageLifetimes: {
    show() {
      if (this.data.isShowHome === _isIntoFromIndex) {
        this.setData({
          isShowHome: !_isIntoFromIndex
        })
      }
    }
  }
})
