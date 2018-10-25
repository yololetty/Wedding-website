//引入项目所需的包
const express=require("express");
const bodyParser = require('body-parser');	//引入bodparser模块

//使用express构建web服务器
var app = express();
app.listen(3000);

//托管静态资源
app.use(express.static('./static'));     //设置静态文件目录


//配置body-parser
app.use(bodyParser.urlencoded({
	extended:false
}));

//使用路由器管理所有用户模块下的路由

//测试案例
//app.use('/demo',demo);
