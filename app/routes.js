// expose the routes to our app with module.exports
module.exports = function(app) {

// routes ======================================================================

// Sverige radio api -----------------------------------------------------------
app.get('/api/trafficinfo', function(req, res) {

    // use mongoose to get all todos in the database
    /*Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format*/
    //});
});

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
};
