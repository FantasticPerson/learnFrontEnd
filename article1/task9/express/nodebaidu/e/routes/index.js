var express = require('express');
var router = express.Router();
var mySql = require('mysql');

/* 在主页获取新闻的请求. */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;

  var connection = mySql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123',
    database:'baidunews'
  });
  connection.connect();
  connection.query('SELECT * FROM `news` WHERE `newstype`=?',[newstype],function(error,rows,fields){
    console.log(rows);
    res.json(rows);
  })
});

module.exports = router;
