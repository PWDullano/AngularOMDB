var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/:searchTerm', {
        templateUrl: 'partials/allMovies.html',
        controller: 'mainController'
      })
      .when('/:searchParams/show', {
        templateUrl: 'partials/searchResults.html',
        controller: 'searchController'
      })
});
