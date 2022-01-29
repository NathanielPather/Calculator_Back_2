const calculator = require('../controllers/CalculatorController');

module.exports = function (app) {
  'use strict';
  app.route('/post')
    .post(calculator.post);
};
