
//name and then empty array
//holds dependencies
var myApp = angular.module('myApp', []);

//glue between model and view
//name like objects pascel
//$scope simmilar to super global;json available anywhere in application
myApp.controller('MyController', function MyController($scope, $http){
    //does a server response request front side
    $http.get('js/data.json')
    //proccess what comes back and is designed by promises
    .then(function(response){
        $scope.artists = response.data;
    });
    // $scope.artists = [{
    // "name":"Barot Bellingham",
    // "shortname":"Barot_Bellingham",
    // "reknown":"Royal Academy of Painting and Sculpture",
    // "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
    // }]
});