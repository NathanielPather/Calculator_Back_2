'use strict';

exports.calculate = function(req, res){
    console.log('works');
};

exports.post = function(req, res){
    console.log(req.body);
    /*
    return res.json({ 
        message: '5+5=10',
        redirect: '/'
    });
    */
   return res.redirect('/');
}