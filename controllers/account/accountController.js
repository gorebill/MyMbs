/**
 * Created by gorebill on 14/2/15.
 */


// 参考: https://github.com/strongloop/express/blob/master/examples/mvc/controllers/account/index.js

/*
exports.before = function(req, res, next){
    var id = req.params.user_id;
    if (!id) return next();
};
*/

var find=function(req, res) {
    res.render('angular');//
}

module.exports = {
    'find': find
};



