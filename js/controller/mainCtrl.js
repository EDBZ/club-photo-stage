app.controller('mainCtrl', function($scope, $http, $route) {

  // $scope globaux=================================================================
  $scope.lcategorieG = [{
    'name': 'ERG',
    'value': 'erg'
  }, {
    'name': 'CFE',
    'value': 'cfe'
  }, {
    'name': 'Customer Visit',
    'value': 'customer_visit'
  }, {
    'name': 'Charity',
    'value': 'charity'
  }, {
    'name': 'Internal',
    'value': 'internal'
  }];

  // includes==============================================

  $scope.header = {
    name: "header.html",
    url: "../views/header.html"
  };

  $scope.menu_gallery = {
    name: "menu_gallery.html",
    url: "../views/menu_gallery.html"
  };

  $scope.upload = {
    name: "upload.html",
    url: "../views/upload.html"
  };

  $scope.suppr = {
    name: "suppr.html",
    url: "../views/suppr.html"
  };

  // $http.get fichiers JSON==========================================

  $scope.categorie =
    ['erg',
    'cfe',
    'customer_visit',
    'charity',
    'internal'];

  $http.get('/../data/datatest/argentic.json')
    .success(function(data) {
      $scope.argentic = data;
    })
    .error(function(data) {
      // log error
    });
  $http.get('/../data/datatest/building.json')
    .success(function(data) {
      $scope.building = data;
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/datatest/cemetery.json')
    .success(function(data) {
      $scope.cemetery = data;
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/datatest/monument.json')
    .success(function(data) {
      $scope.monument = data;
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/datatest/people.json')
    .success(function(data) {
      $scope.people = data;
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/datatest/sea.json')
    .success(function(data) {
      $scope.sea = data;
    })
    .error(function(data) {
      // log error
    });



  $scope.firstId = function(json) {
    return _.first(json);
  };
  $scope.firstPath = function(json) {
    return $scope.firstId(json)
      .path
  };
});
