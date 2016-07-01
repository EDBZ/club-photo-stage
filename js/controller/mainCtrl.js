app.controller('mainCtrl', function($scope, $http) {

  // variables globales=======================


  // includes==============================================

  $scope.header = {
    name: "header.html",
    url: "../views/header.html"
  };

  $scope.menu_gallery = {
    name: "menu_gallery.html",
    url: "../views/menu_gallery.html"
  };

  // $http.get fichiers JSON==========================================

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
