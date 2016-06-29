app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', '$http', function($scope, Upload, $timeout, $http) {
  $scope.submit = function() {
    $scope.uploadFiles($scope.files)
  };

  var exif=[];
  $scope.exif = function(imgs) {
    // exifJ=JSON.parse(JSON.stringify({"test":1,"test2":3}));
    // for (var i = 0; i < imgs.length; i++) {
      var img = imgs[0];
      EXIF.getData(img, function() {
        var marque ={"marque":EXIF.getTag(img, "Make")};
        var modele ={"modele":EXIF.getTag(img, "Model")};
    //     // exif.push(EXIF.getTag(img, "Make"));
    //     // exif.push(EXIF.getTag(img, "Model"));
    //     // exif.push(EXIF.getTag(img, "DateTimeOriginal"));
    //     // exif.push(EXIF.getTag(img, "ISOSpeedRatings"));
    //     // exif.push(EXIF.getTag(img, "FNumber"));
    //     // exif.push('1/'+Math.pow(EXIF.getTag(img, "ExposureTime"),-1));
        exif.push(marque,modele);
      })
      // exif.push(exifJ);
      return exif;
    // };
  };
  $scope.exifArr = exif;


  $scope.uploadFiles = function(files) {
    $scope.files = files;
    if (files && files.length) {
      $scope.exifTest=$scope.exif($scope.files)
      Upload.upload({
          url: 'php/managePhoto.php',
          method: 'POST',
          file: files,
          data: {
            galerie: $scope.galerie,
            user: $scope.user,
            exif: $scope.exifArr
          }
        })
        .then(function(response) {
          $timeout(function() {
            $scope.result = response.data;
          });
        }, function(response) {
          if (response.status > 0) {
            $scope.errorMsg = response.status + ': ' + response.data;
          }
        }, function(evt) {
          $scope.progress =
            Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }
  };
  $scope.test = {
    name: 'test.php',
    url: '/../php/managePhoto.php'
  };
}]);
