// Global dependencies
var express = require('express');
var less = require('express-less');
var sass = require('node-sass-middleware');
var browserify = require('browserify-middleware');
var babelify = require('babelify');

// Initiate Express
var app = express();

// Module definition
exports.connect = function(directory, port) {

    // Browserify options
    var browserifyOptions = {
        'transform': [ babelify.configure({ presets: ['es2015'] }) ]
    };

    // Load middleware
    var mwLess = less(directory);
    var mwSass = sass({ src: directory });
    var mwBrowserify = browserify(directory, browserifyOptions);
    var mwExpress = express.static(directory);

    // Add middleware
    app.use(mwLess, mwSass, mwBrowserify, mwExpress);

    // Listen to port
    port = process.env.PORT || port;

    app.listen(port, function() {
        process.stdout.write('Listening on port ' + port);
    });

};

// Handle HTTP requests
exports.get = app.get.bind(app);
exports.post = app.post.bind(app);
