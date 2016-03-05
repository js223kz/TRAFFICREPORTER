trafficApp.service('TrafficInfo', function($http) {
    return {
        get : function() {
            return $http.get('/api/trafficinfo');
        }
    }
});
