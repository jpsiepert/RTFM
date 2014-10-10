var app = angular.module('rtfmApp')
  app.service('EnvironmentService', function EnvironmentService($window) {
  
   

    // Create a function in EnvironmentService called saveUsername that accepts a username and saves it to local storage using $window.localStorage.setItem('username', username);.
    this.saveUsername = function(username) {
    	$window.localStorage.setItem("username", username)
    };

    //Create another function in EnvironmentSerice called getUsername that returns the username with $window.localStorage.getItem('username');
    this.getUsername = function(){
    	return $window.localStorage.getItem("username")

    };

     this.getEnv = function () {
        return $window.env;
    };
  });