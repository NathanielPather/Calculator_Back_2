'use strict';
module.exports = function(app){
    var calculator = require('../controllers/CalculatorController');

    // Calculator Routes
    app.route('/calculate')
        .get(calculator.calculate);

    app.route('/post')
        .post(calculator.post);
};