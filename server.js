const express = require('express');
const cors = require('cors');
const expressPinoLogger = require('express-pino-logger');
const logger = require('./services/Logger');

const app = express();
app.use(express.json());
const port = process.env.port || 3000;
app.use(cors());

// logger cofiguration
const loggerMiddleware = expressPinoLogger({
  logger: logger,
  autoLogging: true
});
app.use(loggerMiddleware);

// importing route
const routes = require('./api/routes/CalculatorRoutes');
// register the route
routes(app);

// route not found middleware
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  });
});

app.listen(port);

console.log('Calculator RESTful API server started on: ' + port);
