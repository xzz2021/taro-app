module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('feature-flags')
      .use(require('webpack').DefinePlugin, [{
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      }])
    },
    hot: true,
    sourceMapType: 'inline-cheap-module-source-map'
  },
  h5: {}
}
