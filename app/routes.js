// expose the routes to our app with module.exports
module.exports = function(app) {

    // routes ======================================================================

    // Sverige radio api -----------------------------------------------------------
    app.get('/api/trafficinfo', function(req, res) {

            res.send('Jag har kontakt med backend');
    });

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
