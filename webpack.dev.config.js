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
    // devtool: 'source-map',
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
                loader: ExtractTextPlugin
                .extract('style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]','postcss-loader','less-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin
                .extract('style','css?modules&localIdentName=[name]__[local]___[hash:base64:5]!resolve-url-loader!postcss-loader','sass-loader')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192&name=./img/[hash].[ext]',
            },
            {
               test: /\.(woff|svg|eot|ttf)\??.*$/,
               loader: "file-loader?&name=./font/[hash].[ext]"
           }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    }
};


module.exports = config;
