"use strict";
trafficApp.service('MapLayerService', function(MapMarkerService, TrafficInfoService){
    let marker = undefined;
    
    
    this.showAllMarkers = (trafficInfo) =>{
        let markers = [];
       trafficInfo.forEach((item) =>{
            marker = MapMarkerService.createMarker(item);
            markers.push(marker);
       }); 
        if(!markers){
            return null
        }
        return L.layerGroup(markers);
        
    };
    

    this.showSelectedMarkers = (trafficInfo, filter) =>{
        let markers = [];
        trafficInfo.forEach((item) =>{
           if(item.category === filter){
                marker = MapMarkerService.createMarker(item);
                markers.push(marker);
            }  
       }); 
        
        return L.layerGroup(markers); 
    }

 }); 