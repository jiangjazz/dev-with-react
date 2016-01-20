//环境配置参数
process.env.NODE_ENV =  process.env.NODE_ENV || 'development';


//公共模块引入
var http = require('http'),
    express = require('express');

//私有模块引入
var express = require('./config/express'),
    app = express();

//参数变量
var host = 'localhost',
    post = 9090;

app.listen(post, host, function(err, result){
    if(err) console.log(err);
    console.log('Listening at localhost:9090');
});

module.exports = app;