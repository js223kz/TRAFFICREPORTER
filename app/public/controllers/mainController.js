"use strict";
trafficApp.controller('MainController', function($scope, TrafficInfoService){
    
    $scope.map = L.map('map').setView([62, 17], 5);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo($scope.map);

    
    TrafficInfoService.get().then((trafficInfo) => {
        let messages = trafficInfo.data.sr.messages.message;
        
        messages.forEach((message) =>{
           console.log(message.id); 
        });
        }, (error) =>{       
    });   
});