'use strict';
var angular=require('angular');
var route=require('angular-route');
var app=angular.module('bookmyshow',['ngRoute']);
require('./controller');
app.config(function($routeProvider,$locationProvider)
{
  $locationProvider.hashPrefix('');
  $routeProvider.when('/',{
    templateUrl:'views/home.html',
    controller:'homecontroller'
  })
  $routeProvider.when('/movie',{
  templateUrl:'views/movie.html',
   controller:'moviecontroller'
})
$routeProvider.when('/admin',{
templateUrl:'views/admin.html',
 controller:'admincontroller'
})
$routeProvider.when('/adminlogin',{
templateUrl:'views/adminlogin.html'
 // controller:'adminlogincontroller'
})

$routeProvider.when('/booking',{
templateUrl:'views/booking.html',
 controller:'bookingcontroller'
})
$routeProvider.when('/cancellation',{
templateUrl:'views/cancellation.html',
 controller:'cancellationcontroller'
})
$routeProvider.when('/theatre',{
 templateUrl:'views/theatre.html',
  controller:'theatrecontroller'
})
$routeProvider.when('/city',{
 templateUrl:'views/city.html',
  controller:'citycontroller'
})





});
