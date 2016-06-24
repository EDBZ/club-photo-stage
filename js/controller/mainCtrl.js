app.controller('mainCtrl', function($scope, $http) {

  // variables globales=======================
  var dataA = [];
  var dataB = [];
  var dataC = [];
  var dataM = [];
  var dataP = [];
  var dataS = [];
  var allGal = [{
    "id": 0,
    "name": "argentic",
    "gallery": argentic
  }, {
    "id": 1,
    "name": "building",
    "gallery": building
  }, {
    "id": 2,
    "name": "cemetery",
    "gallery": cemetery
  }, {
    "id": 3,
    "name": "monument",
    "gallery": monument
  }, {
    "id": 4,
    "name": "people",
    "gallery": people
  }, {
    "id": 5,
    "name": "sea",
    "gallery": sea
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


  var argentic = $scope.argentic;
  var building = $scope.building;
  var cemetery = $scope.cemetery;
  var monument = $scope.monument;
  var people = $scope.people;
  var sea = $scope.sea;
  $scope.allGal = allGal;

  $scope.firstId = function(json) {
    return _.first(json);
  };
  $scope.firstPath = function(json) {
    return $scope.firstId(json)
      .path
  };
  $scope.test = $scope.firstId(allGal);
})

.controller('testCtrl', function($scope) {
    $scope.galleryName = 'argentic';
    $scope.firstPath=$scope.firstPath($scope.argentic);

    gallery = $scope.argentic
      // $scope.gallery = argentic
      // $scope.argentic
  })
  .controller('testCtrl2', function($scope) {
    $scope.galleryName = 'building'
      // $scope.gallery = building

  })
  .controller('testCtrl3', function($scope) {
    $scope.galleryName = 'cemetery'
      // $scope.gallery = cemetery

  })
  .controller('testCtrl4', function($scope) {
    $scope.galleryName = 'monument'
      // $scope.gallery = monument

  })
  .controller('testCtrl5', function($scope) {
    $scope.galleryName = 'people'
      // $scope.gallery = people

  });
