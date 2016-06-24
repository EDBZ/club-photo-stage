app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', '$http', function($scope, Upload, $timeout, $http) {
  $scope.submit = function() {
    $scope.uploadFiles($scope.files)
  };
  var marque;
  $scope.exif = function(img) {
    EXIF.getData(img, function() {
      marque = 'pouet';
      // EXIF.getTag(that, "Make");
      modele = EXIF.getTag(that, "Model");
      datePDV = EXIF.getTag(that, "DateTimeOriginal");
      iso = EXIF.getTag(that, "ISOSpeedRatings");
      fnumber = EXIF.getTag(that, "FNumber");
      expT = EXIF.getTag(that, "ExposureTime");
    })
    return marque;
  };
  $scope.marque = marque;

  $scope.uploadFiles = function(files) {
    $scope.files = files;
    $scope.test2=$scope.exif(files);
    var that = this;
    if (files && files.length) {
      $scope.exif($scope.files);
      Upload.upload({
          url: 'php/managePhoto.php',
          method: 'POST',
          file: files,
          data: {
            galerie: $scope.galerie,
            user: $scope.user,
            marque: $scope.marque,
            modele: $scope.modele,
            datePDV: $scope.datePDV,
            iso: $scope.iso,
            fnumber: $scope.fnumber,
            expT: $scope.expT
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
