var underscore = angular.module('underscore', []);
     underscore.factory('_', function() {
         return window._; //Underscore should be loaded on the page
     });

var app = angular.module('mainApp', ['jtt_angular_xgallerify','ngRoute', 'ngAnimate',  'ngFileUpload','underscore','angular-loading-bar'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main_gallery.html',
        controller: 'mainCtrl',
      })
      .when('/erg', {
        templateUrl: 'views/categorie.html',
        controller: 'ergCtrl'
      })
      .when('/cfe', {
        templateUrl: 'views/categorie.html',
        controller: 'cfeCtrl'
      })
      .when('/customer_visit', {
        templateUrl: 'views/categorie.html',
        controller: 'customer_visitCtrl'
      })
      .when('/charity', {
        templateUrl: 'views/categorie.html',
        controller: 'charityCtrl'
      })
      .when('/internal', {
        templateUrl: 'views/categorie.html',
        controller: 'internalCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'uploadCtrl'
      })
      .when('/gal',{
        templateUrl: 'views/galerie.html',
        controller:'galCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }])
;
