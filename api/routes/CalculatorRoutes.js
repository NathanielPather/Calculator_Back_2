const calculator = require('../controllers/CalculatorController');

/** Handles the /post route.
 * Forwards to the controller for handling.
 */
module.exports = function (app) {
  'use strict';
  app.route('/post')
    .post(calculator.post);
};
