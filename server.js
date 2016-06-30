"use strict";
// set up ========================
const   express  = require('express'),
        app      = express(),
        server     = require('http').createServer(app),
        morgan = require('morgan'), 
        compression = require('compression'),
        bodyParser = require('body-parser'), 
        port = process.env.PORT || 8080;

// configuration =================
app.use(compression());
app.use(express.static(__dirname + '/public'));  
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// routes ======================================================================
require('./routes.js')(app);


// listen (start app with node server.js) ======================================
server.listen(port);
console.log("App listening on port 8080");
