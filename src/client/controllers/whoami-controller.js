module.exports = {
  name: 'whoamiController',
  cb: ['$scope', '$http', function($scope, $http) {
    $http.get('/api/whoami')
         .then(function(res) {
           $scope.data = (res.data);
         }, function(err) {
           $scope.data = {error: err.toString()};
         });
  }]
};
