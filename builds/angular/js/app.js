
//declare the apps or multiple apps
//redefines apps to made them individuals
var myApp = angular.module('myApp', [
    //adding into to spplications for the things we linked in
    'ngRoute',
    'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
     //similar to the; recognizes the url
    $routeProvider.when('/', {
        templateUrl: 'js/partials/search.html',
        controller: 'SearchController'
    })
    .when('/details',{
        templateUrl: 'js/partials/details.html',
        controller: 'DetailsController'
    });
}]);