"use strict";
trafficApp.controller('MainController', function($scope, TrafficInfoService){
    
    $scope.map = L.map('map').setView([62, 17], 5);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo($scope.map);
    
  
     TrafficInfoService.getDataFromApi()
       .then((data) =>{
        TrafficInfoService.saveTrafficInfo(data)
            .then(() =>{
            TrafficInfoService.getChachedTrafficInfo()
                .then((trafficInfo) =>{
                    console.log(trafficInfo);    
            });        
        });     
     }, (error) =>{
         console.log(error);
     });   
});

   