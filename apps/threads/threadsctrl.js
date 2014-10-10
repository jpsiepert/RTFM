var app = angular.module('rtfmApp')

app.controller("threadsCtrl", function($scope, firebaseService, EnvironmentService, $firebase, threadsRef){
	 $scope.threads = threadsRef.$asArray();

	 //You'll need to create a function in your ThreadsCtrl named createThread. This function must be attached to $scope and should accept a username and a thread title as arguments. It will then use the AngularFire "array" $add function to add the new thread to the threads array. Once you get this working, you'll be able to add threads in your view and watch them automatically add themselves to the threads list.
	$scope.createNewThread = function(username, title){
		$scope.threads.$add({
			username: username,
			title: title
		})
	}
})