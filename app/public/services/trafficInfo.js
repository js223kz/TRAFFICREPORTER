"use strict";
trafficApp.service('TrafficInfoService', ($http) =>{
    return {
        get : () =>{
           return $http.get('/api/trafficinfo');            
        }
    }
});
