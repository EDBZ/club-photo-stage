var app = angular.module('mainApp', ['ngRoute', 'ngAnimate','jtt_angular_xgallerify','angularModalService','ui.bootstrap'])
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
