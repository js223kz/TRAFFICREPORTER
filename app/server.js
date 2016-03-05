"use strict";
// set up ========================
let express  = require('express'),
    app      = express(),
    server     = require('http').createServer(app),
    io = require('socket.io')(server),
    morgan = require('morgan'),           
    bodyParser = require('body-parser'), 
    port = process.env.PORT || 8080;


// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// routes ======================================================================
require('./routes.js')(app);

io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
        client.emit('messages', 'Hello from server');
    });

});

// listen (start app with node server.js) ======================================
server.listen(port);
console.log("App listening on port 8080");
