'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
    context: APP,
    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:8080',
            'webpack/hot/only-dev-server',
            './core/bootstrap.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {   test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader : 'file-loader?name=res/[name].[ext]?[hash]'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules|bower_components/
            },
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-2']
                },
                exclude: /node_modules|bower_components/
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot:true,
        proxy: {
            "/api/*": "http://localhost:3000"
        },
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    devtool: "#inline-source-map"
};
