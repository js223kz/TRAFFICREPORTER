'use strict';
trafficApp.controller('MainController', function($scope, TrafficInfoService, MapMarkerService, MapLayerService){
    
    $scope.trafficInfoList = [];
    $scope.selectedLayer = undefined;
    $scope.map = L.map('map').setView([62, 17], 5);
    $scope.message = false;
    
   
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo($scope.map);
    

    //Get trafficinfo and add info to list
    //and markers at each traffic message position
    TrafficInfoService.getDataFromApi()
       .then((data) =>{
        TrafficInfoService.saveTrafficInfo(data)
        .then(() =>{
            TrafficInfoService.getChachedTrafficInfo()
            .then((trafficInfo) =>{
                $scope.trafficInfoList = trafficInfo;
                $scope.selectedLayer = MapLayerService.showAllMarkers(trafficInfo);
                $scope.map.addLayer($scope.selectedLayer);

            });        
        });     
     }, (error) =>{
         console.log(error);
     });
    
    //shows corresponding marker-popup
    //when user clicks row in list
    $scope.showPopup = (clickedItem) =>{
        let popup = MapMarkerService.showPopup(clickedItem);
        popup.openOn($scope.map);
    };
    
    //change visible markers depending on user choice
    $scope.changeLayer = (filter = null) =>{
        $scope.map.removeLayer($scope.selectedLayer);
        
        if(filter === null){
            $scope.selectedLayer = MapLayerService.showAllMarkers($scope.trafficInfoList);
        }else{
            $scope.selectedLayer = MapLayerService.showSelectedMarkers($scope.trafficInfoList, filter);
            
        }
         $scope.map.addLayer($scope.selectedLayer);
        
        //check to see if layer has markers or not
        if(Object.keys($scope.selectedLayer._layers).length == 0){
            //message: category has no info
            $scope.message = true;
        }else{
            $scope.message = false;
        }
    }
   
    //User filters which markers to see
    $scope.showAllMarkers = () =>{
        $scope.changeLayer(null);
    }
    
    $scope.showRoadTraffic = () =>{
        $scope.changeLayer("0");
    }
    
    $scope.showPublicTraffic = () =>{
        $scope.changeLayer("1");
    }
    
    $scope.showPlannedTraffic = () =>{
        $scope.changeLayer("2");
    }
    $scope.showOtherTraffic = () =>{
        $scope.changeLayer("3");
    }
});

 
