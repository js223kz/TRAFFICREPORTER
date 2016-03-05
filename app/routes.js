"use strict";
var request = require('request');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // routes ======================================================================

    // Sverige radio api -----------------------------------------------------------
    app.get('/api/trafficinfo', function(req, res) {
            

        //Lets configure and request
        request({
            url: 'http://api.sr.se/api/v2/traffic/messages',
            method: 'GET'
        }, (error, response, body)=>{
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
            }
        });
    });

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
