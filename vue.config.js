const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  runtimeCompiler: true, // 运行编译
  lintOnSave: false, // 保存不lint
  configureWebpack: {
    output: {
      filename: function (c) {
        if (c.chunk.name === "preview") {
          return "preview/[name].js"
        } else {
          return "backend/[name].js"
        }
      },
      chunkFilename: "backend/[name].js"
    }
  },
  chainWebpack: (config) => {
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => {
          return [{
            filename: function (c) {
              if (c.chunk.name === "preview") {
                return "preview/css/[name].css"
              } else {
                return "backend/css/[name].css"
              }
            }
          }]
        });
    }
    config.resolve.alias
      .set('@', resolve('src'))
      .set('Wrapper', resolve('src/f-wrapper'))
      .set('Inner', resolve('src/f-inner'))
    config.optimization
      .splitChunks({
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: function (chunk) {
              return chunk.name !== "preview"
            },
            reuseExistingChunk: true
          }
        }
      });
  },
  devServer: {
    proxy: {
      "/mobilex/*": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/image/*": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  pages: {
    wrapper: {
      entry: 'src/pages/wrapper.js',
      template: 'src/pages/wrapper.html',
      filename: 'backend/wrapper.html',
      chunks: ["vendor"]
    },
    inner: {
      entry: 'src/pages/inner.js',
      template: 'src/pages/inner.html',
      filename: 'backend/inner.html',
      chunks: ["vendor"]
    },
    preview: {
      entry: 'src/pages/preview.js',
      template: 'src/pages/preview.html',
      filename: 'preview/preview.html'
    }
  }
}