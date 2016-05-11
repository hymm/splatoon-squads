'use strict';

var express = require('express');
var config = require('../webpack.config.js');

var app = express();

if (true) {
//if (process.env.NODE_ENV === 'development') {
  let webpack = require('webpack'),
    webpackConfig = require('./webpack.dev.config.js'),
    compiler = webpack(webpackConfig);

  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  server.use(require('webpack-hot-middleware')(compiler));
}

var router = express.Router();
//router.get('/', someController);
//app.use(router);

app.listen(3000, ()=>console.log('listending on 3000'));
