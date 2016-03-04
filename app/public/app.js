let trafficApp = angular.module('trafficApp', ['ngRoute']);

trafficApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/mainView.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);