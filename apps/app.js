var app = angular.module('rtfmApp', ["firebase", "ngRoute"])

	app.config(function($routeProvider){
		$routeProvider.when("/", {
  		templateUrl: "/apps/login/login.html",
  		controller: "loginCtrl"
  	}).when("/threads", {
  		templateUrl: "/apps/threads/threads.html",
  		controller: "threadsCtrl",
  	}).when("/threads/:threadId", {
  		templateUrl: "/apps/threads/threads.html",
  		controller: "threadsCtrl"
  	}).when('/threads', {
    templateUrl: '/apps/threads/threads.html',
    controller: 'threadsCtrl',
    resolve: {
      threadsRef: function (ThreadService) {
        return ThreadService.getThreads();
      }
    }
  }).when('thread/:threadId', {
  templateUrl: '/apps/thread/thread.html',
  controller: 'threadCtrl',
  resolve: {
    threadRef: function (ThreadService, $stateParams) {
      return ThreadService.getThread($stateParams.threadId);
    }, 
    commentsRef: function (ThreadService, $stateParams) {
      return ThreadService.getComments($stateParams.threadId);
    }
  }
}).otherwise({
      redirectTo: "/login"
})
});
  
app.run(function($rootScope, $location, EnvironmentService){
 
      $rootScope.$on('$routeChangeStart', function(event, next, current){
          if(EnvironmentService.getUsername()){
            $rootScope.username = EnvironmentService.getUsername();
          } else {
            $location.path("/login")
          }
      })
    })
     
  
     


//Pass the .run function a callback that accepts three parameters, $rootScope, $location, and EnvironmentService. $rootScope is exactly like $scope, but it's global in the sense that anywhere in your application you can get properties that are on $rootScope. $location allows us to redirect to different locations if we need to. EnvironmentService is where we're going to check if our user is Authenticated.
//Inside of our callback we're going to listen for the $routeChangeStart event. Whenever a route changes in our application, angular will emit a '$routeChangeStart' which will run our callback. The bigger picture here is that on every route change, we're going to check if that specific user should be seeing that new view.
  //$rootScope.$on('THEEVENT', function(){
    //callback
    //is how you tell angular to listen for certain events. So in side your .run block, tell angular to listen for the '$routeChangeStart' event and pass it a callback function with a 'event', 'next', and 'current' parameter. As you can imagine, 'event' is the event that's happening, 'next' is the route the application is going to, and 'current' is the current route the application is on. 4. Inside your callback, check to see if ```EnvironmentService.getUserName()''' returns a truthy value, if it doesn't that means the user hasn't been created - which means we need to redirect the user to the login page IE $location.path('/login'). If it does, set a property on $rootScope (for now) of username with the value being what getUserName returned.

