var app = angular.module("computerSolutions",['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'main.html',
            controller:'MainController'
        })
        .when('/main',{
            templateUrl:'main.html',
            controller:'MainController'
        })
        .when('/services',{
            templateUrl:'services.html',
            controller:'ServiceController'
        })
        .when('/about',{
            templateUrl:'about.html',
            controller:'MainController'
        })
        .when('/contact',{
            templateUrl:'contact.html',
            controller:'ContactController'
        })
}])

.controller('MainController',['$scope','$http',function($scope,$http){
    $http.get('services.json').then(function(response){
       $scope.services = response.data; 
    });
}])

.controller('ServiceController',['$scope','$http',function($scope,$http){
    $http.get('services.json').then(function(response){
       $scope.services = response.data;
    });
}])

.controller('ContactController',['$scope','$http',function($scope,$http){
    $http.get('contact.json').then(function(response){
       $scope.locations = response.data;
    });
}]);