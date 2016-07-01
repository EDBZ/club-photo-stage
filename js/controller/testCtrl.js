app.controller('testCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/../data/ERG/testGal.json')
    .success(function(data) {
      $scope.galeries = data;
    })
    .error(function(data) {
$scope.error
    });
$http.get('/../data/datatest/argentic.json')
  .success(function(data) {
    $scope.argentic = data;
  })
  .error(function(data) {
    // log error
  });
$scope.pouet='pouet';

  }]);
