var express = require('express');
var router = express.Router();

//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    database     : 'ddm',
//    password : ''
//});
//
//var total_user;
//connection.connect();
//
//connection.query('select count(*) as totalUser from usertb where password <> ""', function(err, rows, fields) {
//    if (err) throw err;
//
//    total_user = rows[0].totalUser;
//});
//connection.end();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hội quán TnTgame', domain: "tntga.me" });
});

module.exports = router;
