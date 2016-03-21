"use strict";
trafficApp.service('TrafficInfoService', function($http, $q){
    let deferred = $q.defer();
    let trafficInfoStorage = 'trafficinfo';
    
    this.getDataFromApi = () =>{
        $http.get('/api/trafficinfo').then((response) =>{
                deferred.resolve(response.data.sr.messages.message);
            }, (error) =>{
                deferred.reject('Kan tyvärr inte hämta trafikinformation för tillfället.' + error.status);
            });
        return deferred.promise;
    }
    
    this.saveTrafficInfo = (trafficInfo) =>{
        let defaultDescription = 'Ingen beskrivning tillgänglig.'
        let defaultExactLocation = '';
        let trafficInfoArray = [];
        trafficInfo.forEach((item) =>{
            if(Object.keys(item.description).length == 0){
                item.description = defaultDescription;
            }
            
            if(Object.keys(item.exactlocation).length == 0){
                item.exactlocation = defaultExactLocation;
            }
            
            trafficInfoArray.push(item);
        });
        
        sessionStorage.setItem(trafficInfoStorage, trafficInfoArray);
        deferred.resolve();
        return deferred.promise;
    }
    
    this.getChachedTrafficInfo = () =>{
        deferred.resolve(sessionStorage.getItem(trafficInfoStorage));
        return deferred.promise;
    }
});