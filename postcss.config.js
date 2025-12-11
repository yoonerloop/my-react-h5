module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'rpx',
      viewportWidth: 750, // 修改设计稿宽度为 750rpx
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.no-vw'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/react-vant\/lib\/index\.css/], // 排除react-vant/lib/index.css的转化
      landscape: false
    },
    autoprefixer: {
      overrideBrowserslist: [
        'Android >= 4.0',
        'iOS >= 8'
      ]
    }
  }
}