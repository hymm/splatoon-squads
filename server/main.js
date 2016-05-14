'use strict';
var express = require('express');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

//routes
var login = require('./routes/user');

var app = express();

if (process.env.NODE_ENV === 'development') {
  let webpack = require('webpack'),
    webpackConfig = require('../webpack.config.js'),
    compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(cookieParser());
app.use(bodyParser());
app.use(expressSession({secret: 'rats and ships'}));
app.use(passport.initialize());
app.use(passport.session());

//router.get('/', someController);
//routes
app.use(login);

app.listen(3000, ()=>console.log('listening on 3000'));
