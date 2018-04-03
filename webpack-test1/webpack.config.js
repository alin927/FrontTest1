var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //单独打包css文件

module.exports = {
    entry:{   //入口文件
       index: './src/js/entry.js',
        index2:'./src/js/entry2.js'
    },
    output:{                 //输出文件
        filename:'[name].js',
        path:__dirname + '/disk',
        publicPath:'./disk'   //静态资源公共路径
    },
    module:{
        rules:[
            {test:/.js$/,use:['babel-loader']},
            {test:/.css$/,
             use:ExtractTextPlugin.extract({
                fallback:"style-loader",
                 use:"css-loader"
             })},
            {test:/.jpg|png|gif|svg/,use:['url-loader?limit=4000&name=/img/[name].[ext]']}
        ]
    },
    plugins:[
        new UglifyJSPlugin(),   //压缩代码插件
        new webpack.optimize.CommonsChunkPlugin({
            name:"commons",
            filename:"commons.js",
            minChunks:2
        }),
        new ExtractTextPlugin('[name].css')
    ]
}