var express = require('express');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var middleware = app.require('./controllers/middleware.js');
var user = require('../user.js')


app.listen(3000);
