"use strict";

angular.module('trafficApp')
     .factory('mapLayerService', ['mapMarkerService', 'trafficDataService', mapLayerService]);  

function mapLayerService(mapMarkerService, trafficDataService){
    let marker = undefined;

    return {
        showAllMarkers: showAllMarkers,
        showSelectedMarkers: showSelectedMarkers
    }

    function showAllMarkers(trafficInfo){
        let markers = [];
        trafficInfo.forEach((item) =>{
           marker = mapMarkerService.createMarker(item);
               markers.push(marker);
        });

        if(!markers){
            return null
        }
        return L.layerGroup(markers);
    }


    function showSelectedMarkers(trafficInfo, filter){
        let markers = [];
        trafficInfo.forEach((item) =>{
           if(item.category === filter){
                marker = mapMarkerService.createMarker(item);
                markers.push(marker);
            }  
       }); 

        return L.layerGroup(markers); 
    }
}
