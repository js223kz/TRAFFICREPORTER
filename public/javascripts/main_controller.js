/**
 * Created by mkt on 2016-02-24.
 */

var trafficApp = angular.module('trafficApp',['leaflet-directive']);

trafficApp.controller('MainController', ['$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            london: {
                lat: 51.505,
                lng: -0.09,
                zoom: 8
            }
        },
        defaults: {
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true,
            },
            scrollWheelZoom: false
        }
    });



    /*$scope.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();*/

}]);
