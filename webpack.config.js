var webpack = require('webpack');
//打包多个入口文件时会提取出公用的部分，生成common.js
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        home: [
            'webpack-dev-server/client?http://127.0.0.1:8080',
            'webpack/hot/only-dev-server',
            './public/src/home.js'
        ],
        demo1: [
            'webpack-dev-server/client?http://127.0.0.1:8080',
            'webpack/hot/only-dev-server',
            './public/src/demo1.js'
        ]
    },
    output: {
        publicPath: "http://127.0.0.1:8080/public/dist/",
        path: './public/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel-loader'
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony',
            }, {
                test: /\.css$/,
                loader: 'style!css'
                //loader: ["style", "css?sourceMap", "sass?sourceMap"]
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass-loader'
                //loader: ["style", "css?sourceMap", "sass?sourceMap"]
            }, {
                //inline base64 URLs for <=8k images, direct URLs for the rest
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devserver: {
        proxy: {
            '/test/': {
                target: 'http://127.0.0.1:9090/',
                secure: false,
            }
        },
        console: true/*,
        global: true,
        process: true,
        Buffer: true,
        __filename: "mock",
        __dirname: "mock",
        setImmediate: true,
        contentBase: "./build"*/
    },
    plugins: [
        commonsPlugin,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};