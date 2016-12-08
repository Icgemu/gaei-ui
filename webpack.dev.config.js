const path = require('path');
const webpack = require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
       'webpack/hot/dev-server',
        path.join(__dirname, 'src/components/index/index')
    ],
    output: {
        publicPath: '/build',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'gaei-ui dev',
            filename: 'index.html',
            template: 'src/components/index/index.html',
            inject: true,
            hash: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot',
                    'babel?babelrc'
                ],
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=8192'
            }
        ]
    }
};


module.exports = config;
