var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var user = require('./user.js');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');



app.use(middleware.addHeaders);





app.listen(3000);
