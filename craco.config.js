const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

const CracoLessPlugin = require('craco-less')

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack配置文件
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
    }
  }
}