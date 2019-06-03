const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'), 
        publicPath: '/dist'
    },
    module: {
        rules: [
          {
            test: /\.js$/, 
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
                 MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'url-loader',
          
        },
        ],
        
      },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    ],
    devServer: {
        overlay: true,
        port: 3001,
        host: '0.0.0.0',
        stats: {
            colors: true,
            chunks: false
        },
        disableHostCheck: true,
        historyApiFallback: true,
    }
}