/**
 * Created by gorebill on 14/2/15.
 */
var express = require('express');
var accountController = require('../controllers/account/accountController');
var router = express.Router();

/* GET users listing. */
router.get('/:action', function(req, res, next) {
    if(accountController[req.params.action]) {
        accountController[req.params.action](req, res);
    }else {
        res.send('no service');
    }
    //next();//不要加这句
    //res.send('respond with a resource');
});

module.exports = router;
