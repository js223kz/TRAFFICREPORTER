'use strict';
trafficApp.controller('MainController', function($scope, TrafficInfoService, MapMarkerService){
    
    $scope.trafficInfoList = [];
    $scope.markers = [];
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
                $scope.addMarkers(trafficInfo);
                $scope.trafficInfoList = trafficInfo;
                
            });        
        });     
     }, (error) =>{
         console.log(error);
     });
    
    $scope.addMarkers = (trafficInfo) =>{
        let shadowUrl = './images/shadow.png';
         trafficInfo.forEach((item) =>{
            let image = MapMarkerService.setImage(item.priority),
                icon = MapMarkerService.setIcon(image),
                description = MapMarkerService.setDescription(item),
                marker= L.marker([item.latitude, item.longitude], {icon: icon}).addTo($scope.map).bindPopup(description); 
         });
    }
    
    
        
    $scope.showMarker = (item) =>{
        let latLng = [item.latitude, item.longitude],
            description = MapMarkerService.setDescription(item),
            popup = L.popup().setContent(description).setLatLng(latLng);
        
        popup.openOn($scope.map);
    }
});

 
   