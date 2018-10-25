//链接数据库
const mysql = require('mysql');				//引入mysql模块

var pool = mysql.createPool({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'',
	database:'xz',
	connectionLimit:10
});
//导出数据库模块
module.exports = pool;