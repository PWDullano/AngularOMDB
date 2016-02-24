app.controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

$scope.submitPost = function(){
    $http.get("http://www.omdbapi.com/?s=" + $scope.input).then(function(payload){
      $scope.movies = [];
      payload.data.Search.forEach(function(movie){
      $scope.movies.push(movie)
    })
  })
 }
}])
