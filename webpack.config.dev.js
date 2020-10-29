const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')



const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
  },
  optimization: {
      splitChunks: {
          cacheGroups: {
              foldwrap: {
                  name: 'style_foldwrap',
                  test: /style_foldwrap.scss$/,
                  chunks: 'all',
                  enforce: true,
              },
              template: {
                  name: 'style_template',
                  test: /style_template.scss$/,
                  chunks: 'all',
                  enforce: true,
              },
          },
      },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css"
    })
  ]
})
