/**
 * Created by js on 2017/4/1.
 */
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname+'/dist',
        publicPath: '/dist/',
        filename:'build.js'
    },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.jpg|.jpeg|.png$/,
                    loader: 'url-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.less/,
                    loader: 'style-loader!css-loader!less-loader'
                }
            ]
        },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
}