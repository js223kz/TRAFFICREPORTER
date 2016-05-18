"use strict";

//handles data coming from api
angular.module('trafficApp')
    .factory('trafficDataService', ['$http', '$q', 'constants', trafficDataService]);   


function trafficDataService($http, $q, constants){
    let deferred = $q.defer();
    return{
        getTrafficData: getTrafficData,
        getCachedTrafficData: getCachedTrafficData,
        timeToUpdate: timeToUpdate
    };
    
    //gets data from backend
    function getTrafficData(){
        return $http({
            method: 'GET',
            url: '/api/trafficinfo',
            headers: {}
        })
        .then(saveResponseData)
        .catch(sendResponseError);
    }
    
    //saves data to session storage
    //sets default values where none is present
    function saveResponseData(response){
        let trafficInfo = response.data.sr.messages.message;
        let defaultDescription = constants.DEFAULT_DESCRIPTION;
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
        sessionStorage.setItem(constants.TRAFFICINFO_STORAGE, JSON.stringify(trafficInfo));
        sessionStorage.setItem(constants.LATESTUPDATE_STORAGE, Date.now());
        deferred.resolve();
        return deferred.promise;
    }

    function sendResponseError(response){
        return $q.reject('Kan inte hämta trafikinformation.' + response.status);
    }
    
    //checks to see if it's time to update
    //interval of five minutes
    function timeToUpdate(){
        let lastUpdate = Number(sessionStorage.getItem(constants.LATESTUPDATE_STORAGE));
        let interval =  300000;

         if (Date.now() > lastUpdate + interval){
             return true
         }
        return false;
    }
    
    //application allways uses cached data
    function getCachedTrafficData(){
        return JSON.parse(sessionStorage.getItem(constants.TRAFFICINFO_STORAGE));
    }
}
