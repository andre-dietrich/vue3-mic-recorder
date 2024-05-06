const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const {VueLoaderPlugin} = require("vue-loader");

module.exports = (env, args) => {
  let conf = `./webpack.${env.NODE_ENV === 'production' ? 'prod' : 'dev'}.js`

  return merge(require(conf), {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.*', '.js', '.vue', '.json']
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    devServer: {
    },
    performance: {
      hints: false
    }
  })
}
