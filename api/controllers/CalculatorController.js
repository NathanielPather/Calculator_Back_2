const maths = require('../../services/Maths.js');
const logger = require('../../services/Logger');

exports.post = function (req, res) {
  'use strict';
  logger.info('POST route is accessed');
  const solution = maths(req.body.value);
  return res.json({
    message: solution,
    redirect: '/'
  });
};
