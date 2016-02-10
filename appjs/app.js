var myApp=angular.module('myApp',['ngRoute','ngSanitize','myAppControllers','myAppDirectives','ocNgRepeat']);
myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when("/",{templateUrl:"partials/display.html",controller:'displayController'})
.otherwise({redirectTo:'/'});
}]); 

