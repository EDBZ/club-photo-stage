app.controller('adminCtrl', ['$scope', 'Upload', '$timeout', '$http', function($scope, Upload, $timeout, $http) {


  // $scope globaux=================================================================
  $scope.lcategorieG = [{'value':'ERG','name':'erg'},
  {'value':'CFE','name':'cfe'},
  {'value':'Customer Visit','name':'customer_visit'},
  {'value':'Charity','name':'charity'},
  {'value':'Internal','name':'internal'}];
  
  // include=========================================================================
  $scope.upload = {
    name: "upload.html",
    url: "../views/upload.html"
  };
  $scope.manage = {
    name: "manage.html",
    url: "../views/manage.html"
  };
  // recup EXIF =====================================================================
  $scope.getExif = function(files) {
    $scope.files = files;
    $scope.exif = new Array();
    angular.forEach(files, function(file) {
      EXIF.getData(file, function() {
        var tags = EXIF.getAllTags(this);
        $scope.exif.push({
          'marque': tags.Make,
          'modele': tags.Model,
          'iso': tags.ISOSpeedRatings,
          'fnumber': tags.FNumber,
          'vit_obt': '1/' + Math.pow(tags.ExposureTime, -1),
          'datePDV': tags.DateTimeOriginal
        });
      });
    });
    return $scope.exif;
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
            categorie: $scope.lcategorie,
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
  // recup info suppr==============================================================
  // this.lcategorie0;
  // this.s_categorie0;

  // envoie des données par SUBMIT ================================================
  $scope.submit = function() {
    $scope.uploadFiles($scope.files)
  };

  // fonctions de suppressions=====================================================
  $scope.suppr_s_cat = function() {
// getjson.recupdata('/../data/'+$scope.lcategorie0.toLowerCase()+'.json')
// .success(function(data){
//   $scope.test = data;
// })
// alert($scope.test)
  }
}]);
