var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('./dbconfig')
var xss = require('xss')
var csurf = require('csurf')
var bodyParser = require('body-parser')

var connection = mysql.createPool(dbConfig)
var csrfProtection = csurf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })



/* 后台页面. */
router.get('/getnews',function(req, res, next) {
  connection.query('SELECT * FROM `news` order by id desc',[],function(err,rows,fields){
    res.json(rows);
  })
});

router.get('/gettoken',csrfProtection,function(req,res,next){
  res.json(req.csrfToken());
})

router.post('/curnews',csrfProtection, function(req,res,next){
  var newsid = req.body.newsid;
  connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function(err,rows){
    res.json(rows);//changedRows
  });
});

router.post('/delete',parseForm,csrfProtection, function(req,res,next){
  var newsid = req.body.newsid;
  connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newsid],function(err,rows){
    res.json({'success':'ok'})
  })
});

router.post('/updateNews',parseForm,csrfProtection, function(req,res){
  var newstitle = xss(req.body.newstitle);
  var newstype = xss(req.body.newstype);
  var newstime = xss(req.body.newstime);
  var newsimg = xss(req.body.newsimg);
  var newssrc = xss(req.body.newssrc);
  var newsid = xss(req.body.id);
  console.log(newsid);
  connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
    // console.log(err);
    res.json(rows)
  })
});

router.post('/insert',parseForm,csrfProtection, function(req,res,next){
  var newstitle = xss(req.body.newstitle);
  var newstype = xss(req.body.newstype);
  var newsimg = xss(req.body.newsimg);
  var newstime = xss(req.body.newstime);
  var newssrc = xss(req.body.newssrc);
  connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,rows){
    res.json(rows);
  })
});

module.exports = router;
