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
}])

.controller('MainController',['$scope',function($scope){
    $scope.firstController = "Hello! Mate."
    console.log($scope.firstController);
}]);