app.controller('searchController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

  $http.get("http://www.omdbapi.com/?i=" + $routeParams.searchParams).then(function(payload){
    $scope.showMovies = [];
    $scope.showMovies.push(payload.data)
  })
}])
