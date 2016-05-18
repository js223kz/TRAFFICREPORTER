'use strict';

angular.module('trafficApp')
     .controller('mainController', ['$scope', 'constants', 'trafficDataService', 'mapMarkerService', 'mapLayerService', mainController]);  

function mainController($scope, constants, trafficDataService, mapMarkerService, mapLayerService){
    $scope.trafficInfoList = [];
    $scope.selectedLayer = undefined;
    $scope.message = false;
    $scope.error = undefined;
    $scope.latestUpdate = undefined;
    
    //set lat and long + zoom for map
    $scope.map = L.map('map').setView([60, 17], 5);
    
    
    //Set layer on map with tribute to map supplier
    let layer = L.tileLayer(constants.TRAFFICLAYER, {
        attribution: constants.ATTRIBUTION
        }).addTo($scope.map);
 
    //if last update was more than 5 minutes ago
    //update cache otherwise get data directly from chache
    if(trafficDataService.timeToUpdate()){
        trafficDataService.getTrafficData()
            .then(getTrafficInfo)
            .catch(getTrafficError);
    }else{
        getTrafficInfo();
    }
    
    //If unable to fetch data from api
    function getTrafficError(error){
        $scope.latestUpdate = Number(sessionStorage.getItem(constants.LATESTUPDATE_STORAGE));
        $scope.error = "Problem att hämta ny trafikinformation. Informationen uppdaterades senast";
        getTrafficInfo();
    }
    
    //gets data from api and renders all markers on map
    function getTrafficInfo(){
        let cachedInfo = trafficDataService.getCachedTrafficData();
        $scope.trafficInfoList = cachedInfo;
        $scope.selectedLayer = mapLayerService.showAllMarkers(cachedInfo);
        $scope.map.addLayer($scope.selectedLayer);
    }
    
    //shows corresponding marker-popup
    //when user clicks row in list
    $scope.showPopup = (clickedItem) =>{
        let popup = mapMarkerService.showPopup(clickedItem);
        popup.openOn($scope.map);
    };

    //change visible markers depending on user choice
    $scope.changeLayer = (filter = null) =>{
        $scope.map.removeLayer($scope.selectedLayer);

        if(filter === null){
            $scope.selectedLayer = mapLayerService.showAllMarkers($scope.trafficInfoList);
        }else{
            $scope.selectedLayer = mapLayerService.showSelectedMarkers($scope.trafficInfoList, filter);

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

    //User clicks button to filter which markers to see
    $scope.showAllMarkers = () =>{
        $scope.changeLayer(null);
    }

    $scope.showRoadTraffic = () =>{
        $scope.changeLayer(constants.ROADTRAFFIC);
    }

    $scope.showPublicTraffic = () =>{
        $scope.changeLayer(constants.PUBLICTRAFFIC);
    }

    $scope.showPlannedTraffic = () =>{
        $scope.changeLayer(constants.PLANNEDTRAFFIC);
    }
    $scope.showOtherTraffic = () =>{
        $scope.changeLayer(constants.OTHERTRAFFIC);
    }   
}


