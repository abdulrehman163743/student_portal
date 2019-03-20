var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
var ejs = require('ejs');
var admin_portal = require('./controllers/Admin_controller');


var app = express();
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({secret:'boss'}));

admin_portal(app);


app.listen(3000);
