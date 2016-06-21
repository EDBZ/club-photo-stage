app.controller('mainCtrl', function($scope, $http) {
var dataA = [];
var dataB = [];
var dataC = [];
var dataM = [];
var dataP = [];
var dataS = [];

  $scope.header = {
    name: "header.html",
    url: "../views/header.html"
  };

  $scope.menu_gallery = {
    name: "menu_gallery.html",
    url: "../views/menu_gallery.html"
  };


  $http.get('/../data/argentic.json')
    .success(function(data) {
  $scope.argentic = data;
   dataA = $http.get('/../data/argentic.json')
  return dataA
    })
    .error(function(data) {
      // log error
    });
  $http.get('/../data/building.json')
    .success(function(data) {
    $scope.building = data;
     dataB = data;
    return dataB
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/cemetery.json')
    .success(function(data) {
    $scope.cemetery = data;
     dataC = data;
    return dataC
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/monument.json')
    .success(function(data) {
      $scope.monument = data;
       dataM = data;
      return dataM
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/people.json')
    .success(function(data) {
    $scope.people = data;
     dataP = data;
    return dataP
    })
    .error(function(data) {
      // log error
    });

  $http.get('/../data/sea.json')
    .success(function(data) {
     $scope.sea = data;
      dataS = data;
     return dataS
    })
    .error(function(data) {
      // log error
    });

  var  argentic = dataA;
  var  building = dataB;
  var  cemetery = dataC;
  var  monument = dataM;
  var  people = dataP;
  var  sea = dataS;


$scope.allGal = [
  {"id":0,"gallery":argentic},
  {"id":1,"gallery":building},
  {"id":2,"gallery":cemetery},
  {"id":3,"gallery":monument},
  {"id":4,"gallery":people},
  {"id":5,"gallery":sea}
];


$scope.firstId = function(argentic){
  return argentic.id === 0;
};
})
.controller('testCtrl',function($scope){
  $scope.galleryName='argentic';
  $scope.gallery=[];

 gallery = $scope.argentic
  // $scope.gallery = argentic
  // $scope.argentic
})
.controller('testCtrl2',function($scope){
  $scope.galleryName='building'
  // $scope.gallery = building

})
.controller('testCtrl3',function($scope){
  $scope.galleryName='cemetery'
  // $scope.gallery = cemetery

})
.controller('testCtrl4',function($scope){
  $scope.galleryName='monument'
  // $scope.gallery = monument

})
.controller('testCtrl5',function($scope){
  $scope.galleryName='people'
  // $scope.gallery = people

});
