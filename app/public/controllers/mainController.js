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
            let image = MapMarkerService.setImage(item.priority)
            let icon = MapMarkerService.setIcon(image);
            let marker= L.marker([item.latitude, item.longitude], {icon: icon, id: item.id}).addTo($scope.map).bindPopup('<p id=item.id>'+item.description+'</p>'); 
            $scope.markers.push({marker: marker, id:item.id});
             
             
                marker.on('click', function(e){
                 console.log(e);     
                });
         });
    }
    
    
        
    $scope.showMarker = (item) =>{
        console.log(item.description);
        let marker = $scope.findMarker(item.id);
        let  latLng = [item.latitude, item.longitude];
        let popup = L.popup().setContent(item.description).setLatLng(latLng);
        popup.openOn($scope.map);
       
    }

  
    $scope.findMarker = (id) =>{
        let selected = undefined;
        $scope.markers.forEach((marker) =>{
            if(marker.id === id){
               selected = marker;
            }
        });
        return selected;
        
    }
   
});

 
   