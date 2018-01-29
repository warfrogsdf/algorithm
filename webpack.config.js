/**
 * Created by LI on 2017/2/2.
 */
const Webpack = require('webpack');

module.exports = {
    entry: __dirname + "/index.js",
    output: {
        path: __dirname + "/dist",
        filename: 'algorithm.js'
        //filename: 'main.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                      'add-module-exports'
                    ],
                    presets: [
                      'es2015'
                    ]
                }
            }
        ]
    },
    /*plugins: [
        new HtmlWebpackPlugin({
            js: ['./src/main.js'],
            template: './src/index.html'
        })
    ]*/
};
