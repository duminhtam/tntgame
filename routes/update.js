var express = require('express');
var router = express.Router();

var exec = require('child_process').exec,
    child;


var online_computer;
child = exec('ls /writeback/os*.cow | wc -l',
    function (error, stdout, stderr) {
//        online_computer = stdout.split("\n");
        online_computer = stdout;


        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database     : 'tracking',
    password : ''
});


connection.connect();

connection.query('INSERT INTO tracking SET ?', {no: online_computer}, function(err, result) {
    if (err) throw err;

    console.log(result.insertId);
});

//connection.query('select count(*) as totalUser from usertb where password <> ""', function(err, rows, fields) {
//    if (err) throw err;
//    total_user = rows[0].totalUser;
//});
connection.end();



///* GET    . */
router.get('/update', function(req, res) {
    res.render('update', { title: 'Hội quán TnTgame', domain: "tntga.me", online_computer: online_computer});
});

module.exports = router;
