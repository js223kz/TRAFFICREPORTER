"use strict";
let http = require('http'),
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
                result = parser.toJson(result);
                console.log("Got a response: ", result);
                res.send(result);
            });
        }).on('error', function(e){
              console.log("Got an error: ", e);
        });
    });

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
