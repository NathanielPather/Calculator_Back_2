'use strict';
var maths = require('../../services/Maths.js');
const logger = require('../../services/Logger');
exports.calculate = function(req, res){
    console.log('works');
};

exports.post = function(req, res){
    logger.info('POST route is accessed')
    let solution = maths(req.body.value);
    return res.json({ 
        message: solution,
        redirect: '/'
    });
}