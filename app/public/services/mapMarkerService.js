"use strict";
trafficApp.service('MapMarkerService', function(){
  
    this.createMarker = (item) =>{
        let image = this.setImage(item.priority),
            icon = this.setIcon(image),
            description = this.setDescription(item),
            marker= L.marker([item.latitude, item.longitude], {icon: icon}).bindPopup(description);
        return marker;
    };
    
    this.showPopup = (clickedItem) =>{
        let latLng = [clickedItem.latitude, clickedItem.longitude],
            description = this.setDescription(clickedItem),
            popup = L.popup().setContent(description).setLatLng(latLng);
        return popup;       
    };
    
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
   };
    
    this.setDescription = (item) =>{
        return '<p class="popup_title">' + item.title + ' ' + item.exactlocation + '</p><p class="popup_description">'+item.description+'</p>';
    }
 }); 
    


