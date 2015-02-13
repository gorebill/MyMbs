var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.redirect('angular')
});

/* 参考 http://expressjs.com/api.html */

router.get('/angular', function (req, res, next) {
    res.render('angular');
});

router.get('/account/:id([0-9]+)', function (req, res) {
    res.send('user ' + req.params.id);
});

module.exports = router;
