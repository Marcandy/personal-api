var express = require('express');
var bodyParser = require('body-parser');

app.use(bodyParser.json);
app.use(middleware.addHeaders);

var middleware = app.require('./controllers/middleware.js');
var middleware = app.require('./controllers/mainCtrl.js');
var user = require('./user.js')


app.listen(3000);
