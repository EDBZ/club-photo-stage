app.controller('ergCtrl', ['$scope', '$http','getjson', function($scope, $http, getjson) {

getjson.recupdata('/../data/erg.json')
    .success(function(data) {
      categorie = data;
      path = getjson.recupPathJson(categorie);
      $scope.galeries=[];
      for (var prop in path) {
        getjson.recupdata(path[prop])
        .success(function(data){
          var galerie= data;
          $scope.galeries.push(getjson.group_s_cat(galerie));
          // $scope.galeries.push(getjson.lastPath(galerie));
          $scope.gal = getjson.lastPath($scope.galeries);
        })
      }
    });
}])

.controller('cfeCtrl', ['$scope', '$http','getjson', function($scope, $http, getjson) {

getjson.recupdata('/../data/cfe.json')
    .success(function(data) {
      categorie = data;
      path = getjson.recupPathJson(categorie);
      $scope.galeries=[];
      for (var prop in path) {
        getjson.recupdata(path[prop])
        .success(function(data){
          var galerie= data;
          $scope.galeries.push(galerie);
        })
      }
    });
}])

.controller('customer_visitCtrl', ['$scope', '$http','getjson', function($scope, $http, getjson) {

getjson.recupdata('/../data/customer_visit.json')
    .success(function(data) {
      categorie = data;
      path = getjson.recupPathJson(categorie);
      $scope.galeries=[];
      for (var prop in path) {
        getjson.recupdata(path[prop])
        .success(function(data){
          var galerie= data;
          $scope.galeries.push(galerie);
        })
      }
    });
}])

.controller('charityCtrl', ['$scope', '$http','getjson', function($scope, $http, getjson) {

getjson.recupdata('/../data/charity.json')
    .success(function(data) {
      categorie = data;
      path = getjson.recupPathJson(categorie);
      $scope.galeries=[];
      for (var prop in path) {
        getjson.recupdata(path[prop])
        .success(function(data){
          var galerie= data;
          $scope.galeries.push(galerie);
        })
      }
    });
}])

.controller('internalCtrl', ['$scope', '$http','getjson', function($scope, $http, getjson) {

getjson.recupdata('/../data/internal.json')
    .success(function(data) {
      categorie = data;
      path = getjson.recupPathJson(categorie);
      $scope.galeries=[];
      for (var prop in path) {
        getjson.recupdata(path[prop])
        .success(function(data){
          var galerie= data;
          $scope.galeries.push(galerie);
        })
      }
    });
}]);
