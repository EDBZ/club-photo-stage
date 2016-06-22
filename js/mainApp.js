var app = angular.module('mainApp', ['ngRoute', 'ngAnimate', 'jtt_angular_xgallerify', 'ngFileUpload'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main_gallery.html',
        controller: 'mainCtrl',
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl'
      })
      .when('/test2', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl2'
      })
      .when('/test3', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl3'
      })
      .when('/test4', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl4'
      })
      .when('/test5', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl5'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'uploadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }]);
