export default defineAppConfig({
  pages: [
    'pages/upload/index',
    'pages/home/index',
    'pages/modelLibrary/index',
    'pages/order/index',
    'pages/account/index',
  ],
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#6190E8',
    backgroundColor: '#000000',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/modelLibrary/index',
        text: '模型库'
      },
      {
        pagePath: 'pages/upload/index',
        text: '上传报价'
      },
      {
        pagePath: 'pages/order/index',
        text: '订单'
      },
      {
        pagePath: 'pages/account/index',
        text: '我的'
      },

    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
)
