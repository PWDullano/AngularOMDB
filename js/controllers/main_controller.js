app.controller('mainController', ['$scope', '$http', function($scope, $http){

$scope.submitPost = function(){
    $http.get("http://www.omdbapi.com/?s=" + $scope.input).then(function(payload){
      $scope.movies = [];
      console.log(payload);
      payload.data.Search.forEach(function(movie){
      $scope.movies.push(movie)
    })
    console.log($scope.movies);
  })
 }
}])
