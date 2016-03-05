"use strict";
trafficApp.service('TrafficInfoService', function($http) {
    return {
        get : function() {
            return $http.get('/api/trafficinfo');
        }
    }
});
