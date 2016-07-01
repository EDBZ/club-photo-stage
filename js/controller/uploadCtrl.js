app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', '$http', function($scope, Upload, $timeout, $http) {


  // recup EXIF =====================================================================
  $scope.getExif = function(files) {
    $scope.files = files;
    $scope.exif = new Array();
    EXIF.getData(files, function() {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        $scope.file;
        $scope.exif[i] = new Object();
        $scope.exif[i].marque = EXIF.getTag(file, "Make");
        $scope.exif[i].modele = EXIF.getTag(file, "Model");
        $scope.exif[i].iso = EXIF.getTag(file, "ISOSpeedRatings");
        $scope.exif[i].fnumber = 'f:' + (EXIF.getTag(file, "FNumber"));
        $scope.exif[i].vit_obt = '1/' + Math.pow(EXIF.getTag(file, "ExposureTime"), -1);
        $scope.exif.push($scope.exif[i]);
      }
    })
  };



  // upload=======================================================
  $scope.uploadFiles = function(files) {

    if (files && files.length) {
      $scope.files = files;
      Upload.upload({
          url: 'php/managePhoto.php',
          method: 'POST',
          file: files,
          data: {
            categorie: $scope.categorie,
            s_categorie: $scope.s_categorie,
            galerie: $scope.galerie,
            user: $scope.user,
            exif: $scope.exif
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
