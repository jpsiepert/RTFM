//Create methods named getThreads and getThread to generate AngularFire references to all threads and any individual thread. You'll need to inject EnvironmentService to get your Firebase url and you'll need to inject $firebase to generate Firebase references (heretofore referred to as "refs").

var app = angular.module('rtfmApp')

  app.service('ThreadService', function ThreadService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getThreads: function () {
        return $firebase(new Firebase(firebaseUrl + '/threads'));
      },

      getThread: function (threadId) {
        return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
      },

       getComments: function (threadId) {
        return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));
      }
    }

  });