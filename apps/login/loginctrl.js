var app = angular.module('rtfmApp')

app.controller("loginCtrl", function($scope, EnvironmentService, $location){
	$scope.env = EnvironmentService.getEnv();

//Create the logMeIn function in your LoginCtrl. Have it alert the username for now.
$scope.logMeIn = function(){
	debugger;
	alert("Welcome, " + $scope.username + "!");
	$location.path("/threads")
}

//Inject $location into LoginCtrl and use it to forward the user to the threads state after login (which is /threads as the URL, hint, look up how to use $location to redirect to a different URL).





})