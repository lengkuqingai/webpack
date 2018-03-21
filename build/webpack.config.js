const path = require("path");//为了使用绝对定位dirname，防止系统错误
const HTMLPlugin =require('html-webpack-plugin')
module.exports = {
    entry:{
        app:path.join(__dirname,'../client/App.js'),
    },
    output:{
        filename:'[name].[hash].js',//这里的name对应entry的app，hash是每次build时产生的hash值
        path:path.join(__dirname,'../dist'),
        publicPath:''//如果有publicPath，这个路径会加在path前面
    },
    module:{//页面需要引入一些非原生js文件的时候使用mudule
        rules:[
            {
                test:/.jsx$/,//指定需要编译的文件后缀名
                loader:'babel-loader' //指定使用babel-loader去编译这个文件，此时需要下载对应的babel，还需要配置.babelrc文件如何编译
            },
            {
                test:/.js$/,//指定需要编译的文件后缀名
                loader:'babel-loader', //指定使用babel-loader去编译这个文件，此时需要下载对应的babel，还需要配置.babelrc文件如何编译
                exclude:[
                    path.join(__dirname,"../node_modules")
                ]
            }
        ]
    },
    plugins:[
        new HTMLPlugin()//为了将entry里面的文件生成一个html页面，路径使用的是output里面的生成的路径
    ]
    
}