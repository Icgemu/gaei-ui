const path = require('path');
const webpack = require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
       'webpack/hot/dev-server',
        path.join(__dirname, 'src/components/index/index')
    ],
    output: {
        publicPath: '/build/',
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
            template: 'html-withimg-loader!src/components/index/index.html',
            inject: true,
            hash: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
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
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192&name=./img/[hash].[ext]',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin
                    .extract('css?minimize&-autoprefixer!postcss')
            },
            {
               test: /\.(woff|svg|eot|ttf)\??.*$/,
               loader: "file-loader?&name=./font/[hash].[ext]"
           }
        ]
    }
};


module.exports = config;
