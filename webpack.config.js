const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH,"./");
let BUILD_PATH = path.resolve(ROOT_PATH,"dist");


module.exports = {
    entry:{
        "app":path.resolve(APP_PATH,"src/index.jsx")
    },
    output:{
        path:BUILD_PATH,
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                // test 表示测试什么文件类型
                test:/\.css$/,
                // 使用 'style-loader','css-loader'
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader', // 回滚
                    use:'css-loader',
                    publicPath:'../' //解决css背景图的路径问题
                })
            },{
                test:/\.less$/,
                use:ExtractTextPlugin.extract({ //分离less编译后的css文件
                fallback:'style-loader',
                use:['css-loader','less-loader']
            })
            }
    ]
    },
    resolve:{
        modules:[__dirname,'node_modules'],
        alias:{},
        extensions:["*",".js",".jsx"]
    },
    mode: 'development',
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:"react",
            template:"./src/tpl/container.html",
            inject:"body"
        }),
        new OpenBrowserPlugin({
            url:"http:/localhost:4343"
        }),
        new ExtractTextPlugin("style.css")
    ]
}