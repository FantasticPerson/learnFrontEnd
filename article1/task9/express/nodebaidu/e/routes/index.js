var express = require('express');
var router = express.Router();
var mySql = require('mysql');
var sqlConfig = require('./dbconfig');

/* 在主页获取新闻的请求. */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;

  var connection = mySql.createConnection(sqlConfig);
  connection.connect();
  connection.query('SELECT * FROM `news` WHERE `newstype`=?  order by id desc',[newstype],function(error,rows,fields){
    console.log(rows);
    res.json(rows);
  })
});

module.exports = router;
