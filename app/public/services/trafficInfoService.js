"use strict";
trafficApp.service('TrafficInfoService', function($http, $q){
    let trafficInfoStorage = 'trafficinfo';
    let latestUpdate = 'latestupdate';
    let deferred = $q.defer();

    this.getDataFromApi = () =>{
        $http.get('/api/trafficinfo').then((response) =>{
            deferred.resolve(response.data.sr.messages.message);
           }, (error) =>{
                deferred.reject('Kan tyvärr inte hämta trafikinformation för tillfället.' + error.status);
            });
        return deferred.promise;
    };
    
    this.saveTrafficInfo = (trafficInfo) =>{
        let defaultDescription = 'Ingen beskrivning tillgänglig.';
        let defaultExactLocation = '';
        let infoArray = [];
       
        trafficInfo.forEach((item) =>{
            if(Object.keys(item.description).length == 0){
                item.description = defaultDescription;
            }
            
            if(Object.keys(item.exactlocation).length == 0){
                item.exactlocation = defaultExactLocation;
            } 
        });
        sessionStorage.setItem(trafficInfoStorage, JSON.stringify(trafficInfo));
        sessionStorage.setItem(latestUpdate, Date.now());
        deferred.resolve(trafficInfo);
        return deferred.promise;
    };
    
    this.getChachedTrafficInfo = () =>{
        deferred.resolve(JSON.parse(sessionStorage.getItem(trafficInfoStorage)));
        return deferred.promise;
    };
    
    this.checkTimeToUpdate = () =>{
        let lastUpdate = Number(sessionStorage.getItem(latestUpdate));
        let interval =  300000;
        
         if (Date.now() > lastUpdate + interval){
             return true
         }
        return false;
    };
    
    this.updateTrafficInfo = () =>{       
        console.log("borde uppdatera");
        this.getDataFromApi()
        .then((data) =>{
            this.saveTrafficInfo(data)
            .then((trafficInfo) =>{
                deferred.resolve(trafficInfo);  
            });     
         }, (error) =>{
             deferred.reject(error);
         }); 
        return deferred.promise;
     }
});


