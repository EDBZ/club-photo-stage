app.controller('galCtrl', ['$scope', '$http', 'getjson', '$route', function($scope, $http, getjson, $route) {
$scope.name = 'E.R.G.';
$scope.galclass = 'erg';
  getjson.recupdata('/../data/datatest/argentic.json')
    .success(function(data) {
      $scope.argentic = data;
      s_path = getjson.recupPathJson($scope.categorie);
      $scope.s_categorie = [];
      for (var prop in s_path) {
        getjson.recupdata(s_path[prop])
          .success(function(data) {
            s_cat = data;
            g_path = getjson.recupPathJson(s_cat);
            $scope.s_categorie.push(g_path);
          })
      }
    });
  $scope.reloadRoute = function() {
    $window.location.reload();
  }
  $scope.divanim = function(){

  }
}])
