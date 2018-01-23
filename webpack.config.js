/**
 * Created by LI on 2017/2/2.
 */
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['babel-plugin-transform-decorators-legacy', 'syntax-class-properties'],
                    presets: ['es2015', 'stage-2']
                }
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