export default defineAppConfig({
  pages: [
    // 'pages/index/index',
    'pages/home/index',
    'pages/upload/index',
    'pages/account/index'
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
        pagePath: 'pages/upload/index',
        text: '购物车'
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
