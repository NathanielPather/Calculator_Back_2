var express = require('express');
var cors = require("cors");

app = express(),
port = process.env.port || 3000;
app.use(cors());

// importing route
var routes = require('./api/routes/CalculatorRoutes');
// register the route
routes(app);

// route not found middleware
app.use(function(req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
})

app.listen(port);

console.log('Calculator RESTful API server started on: ' + port);