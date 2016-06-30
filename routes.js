"use strict";
const   http = require('http'),
        parser = require('xml2json');
 

// expose the routes to our app with module.exports
module.exports = function(app) {
    
    // routes ======================================================================

    // Sveriges radio api -----------------------------------------------------------
    app.get('/api/trafficinfo', function(req, res) {
        let url = 'http://api.sr.se/api/v2/traffic/messages';

        http.get(url, (response) =>{
            let result = '';

            response.on('data', (chunk) =>{
                result += chunk;
            });

            response.on('end', () =>{
                //parse xml to json
                result = parser.toJson(result);
                res.send(result);
            });
        }).on('error', function(err){
               res.send(err);
        });
    });

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile('./public/index.html'); 
    });
};