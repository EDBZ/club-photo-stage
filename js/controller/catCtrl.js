app.controller('ergCtrl', ['$scope', '$http','getjson', function($scope, $http, getjson) {

getjson.recupdata('/../data/erg.json')
    .success(function(data) {
      $scope.categorie = data;
      // recup path s_categorie
      s_path = getjson.recupPathJson(categorie);
      $scope.s_categorie = [];
      for (var prop in s_path) {
        getjson.recupdata(s_path[prop])
        .success(function(data){
          s_cat= data;
          g_path = getjson.recupPathJson(s_cat);
          $scope.s_categorie.push(g_path);
          // for (var prop in $scope.galeries){
          //   var gal = _.last($scope.galeries[prop]);
          //   $scope.oneImg.push(gal);
          // }
        })
      }
    });
}])
// $scope.s_categorie = [];
// $scope.galeries = [];
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
