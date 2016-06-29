app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', '$http', function($scope, Upload, $timeout, $http) {


  // recup EXIF =====================================================================
  $scope.getExif = function(files) {
    $scope.files = files;
    $scope.exif = new Array();
    EXIF.getData(files, function() {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        $scope.file;
        console.log(i);
        $scope.exif[i-1] = new Object();
        $scope.exif[i-1].marque = EXIF.getTag(file, "Make");
        $scope.exif[i-1].modele = EXIF.getTag(file, "Model");
        $scope.exif.push($scope.exif[i-1]);
      }
    })
    // JSON.stringify($scope.exif)
  };


  // $scope.exif[i-1].push(EXIF.getTag(file, "Model"));
  // $scope.exif[i-1].push(EXIF.getTag(file, "DateTimeOriginal"));
  // $scope.exif[i-1].push(EXIF.getTag(file, "ISOSpeedRatings"));
  // $scope.exif[i-1].push('f:' + (EXIF.getTag(file, "FNumber")));
  // $scope.exif[i-1].push('1/' + Math.pow(EXIF.getTag(file, "ExposureTime"), -1));

  // upload=======================================================
  $scope.uploadFiles = function(files) {

    if (files && files.length) {
      // var index = files.lenght
      $scope.files = files;
      // $scope.marque = $scope.exifArr[0];
      // $scope.modele = $scope.exifArr[1];
      // $scope.datePDV = $scope.exifArr[2];
      // $scope.iso = $scope.exifArr[3];
      // $scope.focale = $scope.exifArr[4];
      // $scope.vit_obt = $scope.exifArr[5];
      // console.log($scope.exifArr);
      Upload.upload({
          url: 'php/managePhoto.php',
          method: 'POST',
          file: files,
          data: {
            categorie: $scope.categorie,
            galerie: $scope.galerie,
            user: $scope.user,
            exif: $scope.exif
              // marque: $scope.marque,
              // modele: $scope.modele,
              // datePDV: $scope.datePDV,
              // iso: $scope.iso,
              // focale: $scope.focale,
              // vit_obt: $scope.vit_obt
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

  // envoie des données par SUBMIT ================================================
  $scope.submit = function() {
    $scope.uploadFiles($scope.files)
  };

}]);
