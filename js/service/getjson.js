app.service('getjson', function($http) {
  return {
            recupdata: function(url) {
              return $http.get(url);
            },
            recupPathJson: function(data) {
              var arrPathJson = _.pluck(data,'path');
              return arrPathJson;
            },
            group_s_cat: function(arr){
              var s_cat = _.groupBy(arr,'info_photo.sous-categorie');
              return s_cat;
            },
            firstPath: function(arr){
              var first = _.first(arr,'id');
              return first;
            },
            lastPath: function(arr){
              var last = _.last(arr,'info_photo.actual_path');
              return last;
            }
          }
});
