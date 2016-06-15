app.controller('mainCtrl', function($scope, $http) {

  $scope.header =
  {
    name: "header.html",
     url: "../views/header.html"
   };
  //
  // $scope.footer =
  // {
  //   name: "footer.html",
  //   url:"../view/footer.html"
  // };


  $http.get('/../data/argentic.json')
    .success(function(data) {
    var argentic = $scope.argentic = data;
    })
    .error(function(data) {
    // log error
  });

  $http.get('/../data/building.json')
    .success(function(data) {
    var building =  $scope.building = data;
    })
    .error(function(data) {
    // log error
  });

  $http.get('/../data/cemetery.json')
    .success(function(data) {
    var cemetery =  $scope.cemetery = data;
    })
    .error(function(data) {
    // log error
  });

  $http.get('/../data/monument.json')
    .success(function(data) {
      var monument = $scope.monument = data;
    })
    .error(function(data) {
    // log error
  });

  $http.get('/../data/people.json')
    .success(function(data) {
      var people = $scope.people = data;
    })
    .error(function(data) {
    // log error
  });

  $http.get('/../data/sea.json')
    .success(function(data) {
      var sea = $scope.sea = data;
    })
    .error(function(data) {
    // log error
  });

// $scope.images = '{"images":
// [
//   'argentic',+'building',+'cemetery',+'monument',+'people',+'sea'
// ]}'

});
