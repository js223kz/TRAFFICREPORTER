"use strict";
trafficApp.service('MapMarkerService', function($q){
    let deferred = $q.defer();
    
    this.saveMarkers = (mapmarkers) =>{
        sessionStorage.setItem('mapmarkers', mapmarkers);
    };
    
    this.addMarkers = (trafficInfo) =>{
        let markers = [];
        
        for (var key in trafficInfo) {
           if (trafficInfo.hasOwnProperty(key)) {
              let obj = trafficInfo[key];
                
           }
        }
        
         deferred.resolve("hello");
        return deferred.promise;
    }
    
    /*this.setIcon = (color) =>{
        let shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png';
        
        let icon = new L.Icon.extend({
          iconUrl: color,
          shadowUrl: shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        });
        deferred.resolve(icon);
        return deferred.promise;     
    };*/
    
   this.setColor = (priority) =>{
        switch(priority) {
            case '1':
                deferred.resolve('https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png');
                break;
            case '2':
                deferred.resolve('https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png');
                break;
            case '3':
                deferred.resolve('https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png');
                break;
            case '4':
                deferred.resolve('https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png');
                break;
            case '5':
                deferred.resolve('https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png');
                break;
            default:
                deferred.resolve('https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png');
            } 
        return deferred.promise;
    };
    
 }); 
    
    
    
    /*trafficInfo.forEach((item) =>{
            this.setColor(item.priority)
            .then((color) =>{
                this.setIcon(color)
                .then((icon) =>{
                    let marker = L.marker([item.latitude, item.longitude], {icon:icon});
                    marker.bindPopup(item.description);
                    markers.push(marker);
                   
                });
            });
             deferred.resolve(markers);
        });
    
    
    this.setIcon = (color) =>{
        let shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png';
        
        let icon = new L.Icon({
          iconUrl: color,
          shadowUrl: shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        });
        deferred.resolve(icon);
        return deferred.promise;
    }*/


