export const getStatusBarHeight = () => wx.getSystemInfoSync().statusBarHeight

export const isIos = () => /IOS/.test(''.toLocaleUpperCase.call(wx.getSystemInfoSync().system))

export const removeRouteSuffix = url => {
  if (/\.html$/g.test(url)) {
    return url.slice(0, -5)
  } else {
    return url
  }
}

export const isFirstLevelPage = () => getCurrentPages().length === 1
