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
                
            });        
        });     
     }, (error) =>{
         console.log(error);
     });
    
    $scope.addMarkers = (markers) =>{
        let shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png';
        let myicon = L.Icon({
                  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
                  shadowUrl: shadowUrl,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41]
                });
         markers.forEach((item) =>{
           //MapMarkerService.setColor(item.priority)
            //.then((color) =>{
               
                L.marker([item.latitude, item.longitude], {icon: myicon}).addTo($scope.map).bindPopup(item.description);

           // });
        });
    }
        
    /*$scope.showMarker = (id) =>{
       TrafficInfoService.findTrafficInfoById(id)
            .then((object) =>{
       });
    } */ 
});

   