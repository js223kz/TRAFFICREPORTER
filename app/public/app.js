"use strict";
let trafficApp = angular.module('trafficApp', ['ngRoute']);

trafficApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/mainView.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/'
      });
      
      //pretty url:s without hashtag
      $locationProvider.html5Mode(true);
  }]);

trafficApp.run(function($window, $rootScope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
            $rootScope.online = false;
        });
    }, false);
    $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
            $rootScope.online = true;
        });
    }, false);
});