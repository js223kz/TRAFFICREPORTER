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
        sessionStorage.setItem(trafficInfoStorage, trafficInfo);
        deferred.resolve();
        return deferred.promise;
    }
    
   this.findTrafficInfoById = (id) =>{
       this.getChachedTrafficInfo()
            .then((trafficInfo) =>{
         
           for (var key in trafficInfo) {
               if (trafficInfo.hasOwnProperty(key)) {
                  let obj = trafficInfo[key];
                  
                   if(obj.id === id){
                      console.log(obj);
                      deferred.resolve(obj);
                  }
               }
            }
           deferred.resolve(null);
     });
      return deferred.promise;    
    }
    
    this.getChachedTrafficInfo = () =>{
        let trafficInfo = sessionStorage.getItem(trafficInfoStorage);
        deferred.resolve(trafficInfo);
        return deferred.promise;
    }
});
