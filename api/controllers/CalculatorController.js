const maths = require('../../services/Maths.js');
const logger = require('../../services/Logger');

/** Handles the /post route.
 * Sends the request data to maths() for calculation.
 * Attaches the result to the response body.
 * Redirects the user back to the main page.
 */
exports.post = function (req, res) {
  'use strict';
  /** Initial logging showing the route is accessed. */
  logger.info('POST route is accessed');
  const solution = maths(req.body.value);
  return res.json({
    message: solution,
    redirect: '/'
  });
};
