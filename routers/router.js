const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const uploadDestination = "uploadDestination";
app.use(express.static(__dirname + "/public"));

// require("router");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, uploadDestination)));
app.use(cors());

var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  secret: 'ninja',
}));
var passport = require('passport');
require('../initializers/passport')

var flash = require('connect-flash');

// AFTER app.use(cookieSession(...))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(require("../controllers/apiuser"));
app.use(require("../controllers/UserController"));
app.use(require("../controllers/password"));

module.exports = app;

