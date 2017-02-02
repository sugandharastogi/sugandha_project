 var express=require('express');
var port = 2500;

 var routes = require('./routes/homeRoute');
 var routes1 = require('./routes/movieRoute');
 var routes2 = require('./routes/bookingRoute');
 var routes3 = require('./routes/cancellationRoute');
 var routes4 =require('./routes/theatreRoute');
var routes5 =require('./routes/adminRoute');
var routes6 =require('./routes/adminloginRoute');
var routes7 =require('./routes/cityRoute');
var bodyParser=require('body-parser');

var app=express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/homeapi',routes);
app.use('/movieapi', routes1);
app.use('/bookingapi', routes2);
app.use('/cancellationapi', routes3);
app.use('/theatreapi', routes4);
app.use('/adminapi', routes5);
app.use('/adminloginapi', routes6);
app.use('/cityapi',routes7);





 var mongoose = require('mongoose');
 var mongo = require('mongodb');
  var dbHost = 'mongodb://localhost:27017/test';

if (app.get('env')==='development'){
var webpackMiddleware=require("webpack-dev-middleware");
var webpack=require('webpack');
var config = require('./webpack.config');
app.use(webpackMiddleware(webpack(config),

{
  publicPath: "/build",
  headers: {"X-Custom-Webpack-Header":"yes"},
  stats: {
    colors: true
  }
}));

}
app.listen(2500,function()
{
  console.log('magic happen on port 2500');
});
