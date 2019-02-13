/*
	准备工作：
	package.json 文件的生成： npm init -y
	依赖包的安装： npm install express art-template body-parser --save
	      		 npm install --save express-art-template --save

	图书管理系统 - 入口文件
 */ 

const express = require('express');
const path = require('path');
const router = require('./router.js');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();

// 启动静态资源服务
app.use('/www', express.static('public'));


// 设置模板引擎
// 设置模板的路径
app.set('views', path.join(__dirname, 'views'));

// 设置模板引擎
app.set('view engine', 'art');

// 使 express 兼容 art-template模板引擎
app.engine('art', require('express-art-template'));

// 处理请求参数
// 挂载参数处理中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 处理 json 格式的数据
app.use(bodyParser.json());

// 启动服务器功能
// 配置路由
app.use(router);


// 监听端口
app.listen(3000, () => {
	console.log('running...');
});