/**
 * Created by LI on 2017/2/2.
 */
//一个常见的Webpack配置文件
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/build",
        filename: '[name].[hash:8].js'
        //filename: 'main.js'
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['babel-plugin-transform-decorators-legacy', 'syntax-class-properties'],
                    presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-3', 'stage-2', 'stage-1', 'stage-0']
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            js: ['./src/main.js'],
            template: './src/index.html'
        })
    ]
};