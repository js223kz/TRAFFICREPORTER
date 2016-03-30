(function(){
    
    angular.module('trafficApp')
        .constant('constants', {
            ROADTRAFFIC: '0',
            PUBLICTRAFFIC: '1',
            PLANNEDTRAFFIC: '2',
            OTHERTRAFFIC: '3',
        
            TRAFFICLAYER: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            ATTRIBUTION: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        
            TRAFFICINFO_STORAGE: 'trafficinfo',
            LATESTUPDATE_STORAGE: 'latestupdate',
        
            DEFAULT_DESCRIPTION: 'Ingen beskrivning tillgänglig.',
            
            ROAD_CAT: 'Vägtrafik',
            PUBLIC_CAT: 'Kollektivtrafik',
            PLANNED_CAT: 'Planerad störning',
            OTHER_CAT: 'Övrigt'
        });
}());

             