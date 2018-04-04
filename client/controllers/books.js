var myApp = angular.module('myApp');


myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
 console.log("loadinggg");
$scope.getBooks = function(){
    $http({
        method: 'get', 
        url: '/api/books'
    }).then(function (response) {
        console.log(response, 'res');
        $scope.books = response.data;
	},function (error){
	    console.log(error, 'Failed to get data!');
	});

}

$scope.getBook = function(){
	var id = $routeParams.id;
    $http({
        method: 'get', 
        url: '/api/books/'+id
    }).then(function (response) {
        // console.log(response, 'res');
        $scope.book = response.data;
	},function (error){
	    console.log(error, 'Failed to get book details!');
	});

}

$scope.addBook = function(){
    $http({
        method: 'post', 
        url: '/api/books/',
        data: $scope.book
    }).then(function (response) {
    	console.log(response);
       window.location.href="#/books";
	},function (error){
	    console.log(error, 'Failed to add book.');
	});

}

$scope.updateBook = function(){
	var id = $routeParams.id;
    $http({
        method: 'put', 
        url: '/api/books/'+id,
        data: $scope.book
    }).then(function (response) {
        // console.log(response, 'res');
         window.location.href="#/books";
	},function (error){
	    console.log(error, 'Failed to update book!');
	});

}

$scope.removeBook = function(id){
    $http({
        method: 'delete', 
        url: '/api/books/'+id,
        data: $scope.book
    }).then(function (response) {
        // console.log(response, 'res');
         window.location.href="#/books";
	},function (error){
	    console.log(error, 'Failed to delete book!');
	});

}


}]);