app.controller('ergCtrl', ['$scope', '$http', 'getjson', '$route', function($scope, $http, getjson, $route) {
  $scope.name = 'E.R.G.';
  $scope.galclass = 'erg';
  getjson.recupdata('/../data/erg.json')
    .success(function(data) {
      $scope.categorie = data;
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

  $scope.divanim = function(path) {
    $('#galeries')
      .addClass('anim');
    getjson.recupdata(path)
      .success(function(data) {
        $scope.galeries = getjson.last_imgs(data);

      })
  }

}])


.controller('cfeCtrl', ['$scope', '$http', 'getjson', '$route', function($scope, $http, getjson, $route) {
  $scope.name = 'C.F.E.';
  $scope.galclass = 'cfe';
  getjson.recupdata('/../data/cfe.json')
    .success(function(data) {
      $scope.categorie = data;
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

}])

.controller('customer_visitCtrl', ['$scope', '$http', 'getjson', '$route', function($scope, $http, getjson, $route) {
  $scope.name = 'Customer visit';
  $scope.galclass = 'customer';
  getjson.recupdata('/../data/customer_visit.json')
    .success(function(data) {
      $scope.categorie = data;
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

}])

.controller('charityCtrl', ['$scope', '$http', 'getjson', '$route', function($scope, $http, getjson, $route) {
  $scope.name = 'Charity';
  $scope.galclass = 'charity';
  getjson.recupdata('/../data/charity.json')
    .success(function(data) {
      $scope.categorie = data;
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

}])

.controller('internalCtrl', ['$scope', '$http', 'getjson', '$route', function($scope, $http, getjson, $route) {
  $scope.name = 'Internal';
  $scope.galclass = 'internal';
  getjson.recupdata('/../data/internal.json')
    .success(function(data) {
      $scope.categorie = data;
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

}]);
