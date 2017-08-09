var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('./dbconfig')

var connection = mysql.createPool(dbConfig)

/* 后台页面. */
router.get('/getnews', function(req, res, next) {
  connection.query('SELECT * FROM `news` order by id desc',[],function(err,rows,fields){
    res.json(rows);
  })
});

router.post('/curnews',function(req,res,next){
  var newsid = req.body.newsid;
  connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function(err,rows){
    res.json(rows);//changedRows
  });
});

router.post('/delete',function(req,res,next){
  var newsid = req.body.newsid;
  connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newsid],function(err,rows){
    res.json({'success':'ok'})
  })
});

router.post('/updateNews',function(req,res){
  var newstitle = req.body.newstitle;
  var newstype = req.body.newstype;
  var newstime = req.body.newstime;
  var newsimg = req.body.newsimg;
  var newssrc = req.body.newssrc;
  var newsid = req.body.id;
  console.log(newsid);
  connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
    // console.log(err);
    res.json(rows)
  })
});

router.post('/insert',function(req,res,next){
  var newstitle = req.body.newstitle;
  var newstype = req.body.newstype;
  var newsimg = req.body.newsimg;
  var newstime = req.body.newstime;
  var newssrc = req.body.newssrc;
  connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,rows){
    res.json(rows);
  })
});

module.exports = router;
