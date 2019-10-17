module.exports = {
  productionSourceMap: false,
  parallel: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gw2-builds/'
    : '/',
}
