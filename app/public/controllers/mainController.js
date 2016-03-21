'use strict';
trafficApp.controller('MainController', function($scope, TrafficInfoService, MapMarkerService, MapLayerService){
    
    $scope.trafficInfoList = [];
    $scope.selectedLayer = undefined;
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
                $scope.trafficInfoList = trafficInfo;
                $scope.selectedLayer = MapLayerService.allMarkersLayer(trafficInfo);
                $scope.map.addLayer($scope.selectedLayer);

            });        
        });     
     }, (error) =>{
         console.log(error);
     });
    
    $scope.showPopup = (clickedItem) =>{
        let popup = MapMarkerService.showPopup(clickedItem);
        popup.openOn($scope.map);
    };
    
    
    $scope.showAllMarkers = () =>{
        $scope.map.removeLayer($scope.selectedLayer);
        $scope.selectedLayer = MapLayerService.allMarkersLayer($scope.trafficInfoList);
        $scope.map.addLayer($scope.selectedLayer);
    }
    
    $scope.showRoadTraffic = () =>{
        $scope.map.removeLayer($scope.selectedLayer);
        $scope.selectedLayer = MapLayerService.roadTrafficLayer($scope.trafficInfoList);
        $scope.map.addLayer($scope.selectedLayer);
    }
    
    $scope.showPublicTraffic = () =>{
        $scope.map.removeLayer($scope.selectedLayer);
        $scope.selectedLayer = MapLayerService.publicTrafficLayer($scope.trafficInfoList);
        $scope.map.addLayer($scope.selectedLayer);
    }
    
     $scope.showPublicTraffic = () =>{
        $scope.map.removeLayer($scope.selectedLayer);
        $scope.selectedLayer = MapLayerService.publicTrafficLayer($scope.trafficInfoList);
        $scope.map.addLayer($scope.selectedLayer);
    }
    
    $scope.showPlannedTraffic = () =>{
        $scope.map.removeLayer($scope.selectedLayer);
        $scope.selectedLayer = MapLayerService.plannedTrafficLayer($scope.trafficInfoList);
        $scope.map.addLayer($scope.selectedLayer);
    }
    
    
    
    $scope.showOtherTraffic = () =>{
        $scope.map.removeLayer($scope.selectedLayer);
        $scope.selectedLayer = MapLayerService.otherTrafficLayer($scope.trafficInfoList);
        $scope.map.addLayer($scope.selectedLayer);
    }
});

 
