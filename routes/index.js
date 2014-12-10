var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hội quán TnTgame', domain: "tntga.me" });
});

module.exports = router;
