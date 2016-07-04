app.service('getjson', function($http) {
  return {
            recupdata: function(url) {
              return $http.get(url);
            },
            recupPathJson: function(data) {
              var arrPathJson = _.pluck(data,'path');
              return arrPathJson;
            },
            firstPath: function(arr){
              var first = _.first(arr);
              return first;
            },
            lastPath: function(arr){
              var last = _.last(arr);
              return last;
            }
          }
});
