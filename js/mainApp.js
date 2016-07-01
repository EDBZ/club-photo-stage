var underscore = angular.module('underscore', []);
     underscore.factory('_', function() {
         return window._; //Underscore should be loaded on the page
     });
// ,'angular-loading-bar'
var app = angular.module('mainApp', ['jtt_angular_xgallerify','ngRoute', 'ngAnimate',  'ngFileUpload','underscore'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main_gallery.html',
        controller: 'mainCtrl',
      })
      .when('/erg', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl'
      })
      .when('/cfe', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl2'
      })
      .when('/customer_visit', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl3'
      })
      .when('/charity', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl4'
      })
      .when('/internal', {
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
