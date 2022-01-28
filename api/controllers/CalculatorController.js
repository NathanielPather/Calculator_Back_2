'use strict';

exports.calculate = function(req, res){
    console.log('works');
};

exports.post = function(req, res){
    console.log('post works');
    res.json({ message: '5+5=10' });
    res.redirect('/');
};