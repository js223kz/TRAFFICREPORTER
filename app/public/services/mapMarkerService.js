"use strict";
//(function(){
angular.module('trafficApp')
     .factory('mapMarkerService', ['constants','$filter', mapMarkerService]);  

    function mapMarkerService(constants, $filter){
        
        return{
                createMarker: createMarker,
            };

        function createMarker(item){
            let image = setImage(item.priority),
                icon = setIcon(image),
                popupInfo = setPopupInfo(item),
                marker= L.marker([item.latitude, item.longitude], {icon: icon}).bindPopup(popupInfo);
            return marker;
        }

         function showPopup(clickedItem){
            let latLng = [clickedItem.latitude, clickedItem.longitude],
                popupInfo = setPopupInfo(clickedItem),
                popup = L.popup().setContent(popupInfo).setLatLng(latLng);
            return popup;       
        }

        function setIcon(image){
            let shadowUrl = './images/shadow.png';
            let marker = L.icon({
                iconUrl: image,
                shadowUrl: shadowUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41]
            });
            return marker;
       }
 
       function setImage(priority){
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

        function setCategory(category){
            let cat = undefined;
             switch(category) {

                case constants.ROADTRAFFIC:
                    cat = constants.ROAD_CAT;
                    break;
                case constants.PUBLICTRAFFIC:
                    cat = constants.PUBLIC_CAT;
                    break;
                case constants.PLANNEDTRAFFIC:
                    cat = constants.PLANNED_CAT;
                    break;
                case constants.OTHERTRAFFIC:
                    cat = constants.OTHER_CAT;
                    break;
                default:
                    cat = constants.OTHER_CAT;
                }
            return cat;
       }

        function setPopupInfo(item){
            let date = new Date(item.createddate),
                formattedDate = $filter('date')(date, 'yyyy-MM-dd hh:mm'),
                category = setCategory(item.category),
                description =  item.description,
                title = item.title,
                exactlocation = item.exactlocation;


            return '<p class="popup_title">' + title + ' ' + 
                exactlocation + '</p><p class="popup_description">' +
                '<p class= "date">Skapad: ' + formattedDate + '</p>' +
                '<p class= "category">Kategori: ' + category + 
                '</p>' + description +'</p>';
        }
    }
//}());
    


