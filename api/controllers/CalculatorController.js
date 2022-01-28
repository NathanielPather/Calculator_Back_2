'use strict';
var maths = require('../../services/Maths.js');
exports.calculate = function(req, res){
    console.log('works');
};

exports.post = function(req, res){
    let solution = maths(req.body.value);
    // console.log(solution);
    return res.json({ 
        message: solution,
        redirect: '/'
    });
}