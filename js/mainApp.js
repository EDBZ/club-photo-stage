var app = angular.module('mainApp', ['ngRoute', 'ngAnimate','jtt_angular_xgallerify','angularModalService'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'mainCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
