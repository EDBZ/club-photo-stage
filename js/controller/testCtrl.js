app.controller('testCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('/../data/test.json')
    .success(function(data) {
      $scope.galeries = data;
    })
    .error(function(data) {
      // log error
    });
$scope.pouet='pouet';

  }]);
