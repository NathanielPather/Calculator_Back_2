/** Express server for backend. */
const express = require('express');
/** Enables cross origin resource sharing.
 * Allows browser to run server side scripts.
 */
const cors = require('cors');
/** Enables pino logging.
 * Used for http logging to console.
 */
const expressPinoLogger = require('express-pino-logger');
/** Pino logger configuration */
const logger = require('./services/Logger');

const app = express();
app.use(express.json());
const port = process.env.port || 3000;
app.use(cors());

/** Connecting pino-express-logger to the express app. */
const loggerMiddleware = expressPinoLogger({
  logger: logger,
  autoLogging: true
});
app.use(loggerMiddleware);

/** Connecting routes to the express app. */
const routes = require('./api/routes/CalculatorRoutes');
routes(app);

/** Handling unfound routes. */
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  });
});

app.listen(port);

console.log('Calculator RESTful API server started on: ' + port);
