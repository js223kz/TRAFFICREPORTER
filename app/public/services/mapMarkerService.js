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
    
    this.setIcon = (image) =>{
        let shadowUrl = './images/shadow.png';
        let marker = L.icon({
            iconUrl: image,
            shadowUrl: shadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41]
        });
        return marker;
         
    };
    
   this.setImage = (priority) =>{
       let image = undefined;
         switch(priority) {
                 
            case '1':
                image = 'images/red.png';
                break;
            case '2':
                image = 'images/orange.png';
                break;
            case '3':
                image = 'images/violet.png';
                break;
            case '4':
                image = 'images/yellow.png';
                break;
            case '5':
                image = 'images/green.png';
                break;
            default:
                image = 'images/red.png';
            }
        return image;
   }
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


