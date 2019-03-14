var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var routeDV = require('./route/routeDV');
var routeKT = require('./route/routeKT');
var routeCT = require('./route/routeCT');
var routeKL = require('./route/routeKL');
var routeXL = require('./route/routeXL');
app.use('/dangvien', routeDV);
app.use('/khenthuong', routeKT);
app.use('/congtac', routeCT);
app.use('/kyluat', routeKL);
app.use('/xeploai', routeXL);
var server = app.listen(3000, function () {
    console.log('Server listening on port ' + server.address().port);
});

module.exports = app;


