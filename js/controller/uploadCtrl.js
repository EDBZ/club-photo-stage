app.controller('uploadCtrl',  ['$scope', 'Upload', '$timeout','$http', function ($scope, Upload, $timeout,$http) {
    $scope.submit = function(){
      $scope.uploadFiles($scope.files)
    };


    $scope.uploadFiles = function (files) {
        $scope.files = files;

        if (files && files.length) {
            Upload.upload({
                url: 'php/managePhoto.php',
                method:'POST',
                file : files,
                data:{
                  galerie:$scope.galerie,
                  user:$scope.user
                  // legend:$scope.legend
                }
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.progress =
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };
    $scope.test={
      name:'test.php',
      url:'/../php/managePhoto.php'
    };
}]);
