"use strict";
trafficApp.service('TrafficInfoService', function($http, $q){
    let deferred = $q.defer();
    let trafficInfoStorage = 'trafficinfo';
    this.getDataFromApi = () =>{
        $http.get('/api/trafficinfo').then((response) =>{
                deferred.resolve(response.data.sr.messages.message);
            }, (error) =>{
                deferred.reject('Kan tyvärr inte hämta trafikinformation för tillfället.');
            });
        return deferred.promise;
    };
    
    this.saveTrafficInfo = (trafficInfo) =>{
        sessionStorage.setItem(trafficInfoStorage, trafficInfo);
        deferred.resolve();
        return deferred.promise;
    };
    
    this.getChachedTrafficInfo = () =>{
        let trafficInfo = sessionStorage.getItem(trafficInfoStorage);
        deferred.resolve(trafficInfo);
        return deferred.promise;
    };

});

