"use strict";
trafficApp.controller('MainController', function($scope, TrafficInfoService){

    TrafficInfoService.get()
            .then(function(data) {
                $scope.data = data;
            }, function(error){       
    });   
});