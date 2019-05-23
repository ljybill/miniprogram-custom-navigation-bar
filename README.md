# miniprogram-custom-navigation-bar(小程序自定义头部导航栏)

## 特性

- 简单配置
- [ionicons开源图标库](https://ionicons.com/)

## 安装

1. 在小程序项目中启用 npm，

2. 执行`npm i miniprogram-custom-navigation-bar --save`或者执行`yarn add miniprogram-custom-navigation-bar`

3. 微信开发者工具执行`构建npm`，组件就添加到了小程序中

4. 然后引入到用到的页面，如果使用页面比较多，也可以直接放到`app.json`中

        "usingComponents": {
          "navigation-bar": "miniprogram-custom-navigation-bar/index"
        }

此时，就可以在wxml中使用`navigation-bar`组件了

## 属性

| 名字          | 类型    | 默认值 | 说明                             | 版本要求 |
| ------------- | ------- | ------ | -------------------------------- | -------- |
| title         | String  | ''     | 头部栏显示的标题                 |          |
| defaultHeight | Boolean | false  | 是否产生一个同高度的空白 view 块 |          |
| proxyBack     | Boolean | false  | 是否代理返回按钮点击事件         |          |

## 事件

| 事件         | 参数类型 | 说明                                                            | 版本要求 |
| ------------ | -------- | --------------------------------------------------------------- | -------- |
| navigateBack | null     | 当 proxyBack 值为 true 时会触发，取消用户点击返回按钮的默认行为 |          |
| navBarHeight | Number   | 返回当前组件的高度，在组件初始化时触发                          |          |

> 参数中的值在 `evt.detail` 中

## 实现原理

请移步 [https://github.com/ljybill/miniprogram-utils/tree/master/custom-navigation-bar](https://github.com/ljybill/miniprogram-utils/tree/master/custom-navigation-bar)

## 贡献

本组件还在起步阶段，目前仅实现了基础功能，如果您有需求或在使用过程中遇到了问题，欢迎提issue，另外也可以根据自身业务下载源代码自行修改。