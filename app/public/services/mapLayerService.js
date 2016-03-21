"use strict";
trafficApp.service('MapLayerService', function(MapMarkerService, TrafficInfoService){
    let marker = undefined;
    
    
    this.showMarkers = (trafficInfo) =>{
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
    

    this.allMarkersLayer = (trafficInfo) =>{
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
    
    this.roadTrafficLayer = (trafficInfo) =>{
        let markers = [];
        trafficInfo.forEach((item) =>{
            if(item.category === "0"){
                marker = MapMarkerService.createMarker(item);
                markers.push(marker);
            }            
       });
        if(!markers){
            return null;
        }
        return L.layerGroup(markers);
    }
    
    this.plannedTrafficLayer = (trafficInfo) =>{
        let markers = [];
        trafficInfo.forEach((item) =>{
            if(item.category === "2"){
                marker = MapMarkerService.createMarker(item);
                markers.push(marker);
            }            
       });
        if(!markers){
            return null;
        }
        return L.layerGroup(markers);
    }
    
    this.publicTrafficLayer = (trafficInfo) =>{
        let markers = [];
        trafficInfo.forEach((item) =>{
            if(item.category === "1"){
                marker = MapMarkerService.createMarker(item);
                markers.push(marker);
            }            
       });
        if(!markers){
            return null;
        }
        return L.layerGroup(markers);
    }
    
    this.otherTrafficLayer = (trafficInfo) =>{
        let markers = [];
        trafficInfo.forEach((item) =>{
            if(item.category === "3"){
                marker = MapMarkerService.createMarker(item);
                markers.push(marker);
            }            
       });
        if(!markers){
            return null;
        }
        return L.layerGroup(markers);
    }
    
    
        
        
    
 }); 