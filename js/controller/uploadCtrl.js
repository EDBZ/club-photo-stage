app.controller('uploadCtrl',  ['$scope', 'Upload', '$timeout','$http', function ($scope, Upload, $timeout,$http) {
    $scope.uploadFiles = function (files) {
        $scope.files = files;
        if (files && files.length) {
            Upload.upload({
                url: '/../php/test.php',
                method:'POST',
                file:files,
                data: {
                    'targetPath': '/upload/'
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
      url:'/../php/test.php'
    };
}]);
