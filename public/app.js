"use strict";
let trafficApp = angular.module('trafficApp', ['ngRoute', 'ngSanitize']);

trafficApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/mainView.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/'
      });
      
      //pretty url:s without hashtag
      $locationProvider.html5Mode(true);
  }]);

